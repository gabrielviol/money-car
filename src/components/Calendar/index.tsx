import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle, Label, PopoverDay, RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from "./styles";
import { useState } from "react";
import dayjs from 'dayjs'
import { useRouter } from "next/dist/client/router";
import { getWeekDays } from "@/utils/get-week-days";
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Text } from "@ignite-ui/react";

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

const dataUsers = [
  {
    id: 1,
    name: 'Gabriel',
    total: 0
  },
  {
    id: 2,
    name: 'Rebecca',
    total: 0
  },
  {
    id: 3,
    name: 'Ninguém',
    total: 0
  }
]

type CalendarWeeks = CalendarWeek[]

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

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
  const RadioGroupDemo = ({ name, key }: any) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioGroupItem value={name} id={key}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <Label htmlFor={key}>
        {name}
      </Label>
    </div>
  )

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Junho <span>2023</span>
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
                              <RadioGroupRoot aria-label="View density">
                                <Text>Quem Levou?</Text>
                                {dataUsers.map(user => {
                                  return <RadioGroupDemo key={user.id} name={user.name} />
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