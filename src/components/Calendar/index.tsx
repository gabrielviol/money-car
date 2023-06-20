import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
  Label,
  PopoverDay,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot
} from "./styles";
import { useState } from "react";
import dayjs from 'dayjs'
import { useRouter } from "next/dist/client/router";
import { getWeekDays } from "@/utils/get-week-days";
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Text } from "@ignite-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { incrementDay, setDriversState } from "@/store/reducers/driverReducer";

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

type CalendarWeeks = CalendarWeek[]

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const router = useRouter()

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }
  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')

    setCurrentDate(nextMonthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const daysInMonthArray = Array.from({
    length: currentDate.daysInMonth(),
  }).map((_, i) => {
    return currentDate.set('date', i + 1)
  })

  const firstWeekDay = currentDate.get('day')

  const previousMonthFillArray = Array.from({
    length: firstWeekDay
  })
    .map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    })
    .reverse()

  const lastDayInCurrentMonth = currentDate.set(
    'date',
    currentDate.daysInMonth(),
  )
  const lastWeekDay = lastDayInCurrentMonth.get('day')

  const nextMonthFillArray = Array.from({
    length: 7 - (lastWeekDay + 1),
  }).map((_, i) => {
    return lastDayInCurrentMonth.add(i + 1, 'day')
  })

  const calendarDays = [
    ...previousMonthFillArray.map((date) => {
      return { date, disabled: true }
    }),
    ...daysInMonthArray.map((date) => {
      return {
        date,
        disabled:
          false
      }
    }),
    ...nextMonthFillArray.map((date) => {
      return { date, disabled: true }
    })
  ]

  const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
    (weeks, _, i, original) => {
      const isNewWeek = i % 7 === 0

      if (isNewWeek) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        })
      }

      return weeks
    },
    [],
  )

  const dispatch = useDispatch()
  const drivers = useSelector(setDriversState)
  console.log(daysInMonthArray.map((date) => {
    const dayInMonth = dayjs(date).format('YYYY-MM-DD')
    return {
      dayInMonth
    }
  }))

  const handleSetUser = (selectedUser: string) => {
    console.log(selectedUser)
    // dispatch(setSelectedUser(selectedUser));
    dispatch(incrementDay(selectedUser));
  };

  const RadioGroupDemo = ({ value }: any) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioGroupItem value={value}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <Label>
        {value.name}
      </Label>
    </div>
  )

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()}>
                      <Popover.Root>
                        <CalendarDay disabled={disabled}>{date.get('date')}</CalendarDay>
                        <Popover.Portal>
                          <PopoverDay>
                            <form>
                              <RadioGroupRoot
                                aria-label="View density"
                                onValueChange={(props) => handleSetUser(props)}
                              >
                                <Text>Quem Levou?</Text>
                                {drivers.map(driver => {
                                  return <RadioGroupDemo key={driver.id} value={driver} />
                                })}
                              </RadioGroupRoot>
                            </form>
                            <Popover.Arrow />
                          </PopoverDay>
                        </Popover.Portal>
                      </Popover.Root>
                    </td>

                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}