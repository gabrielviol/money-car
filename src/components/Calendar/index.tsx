import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle
} from "./styles";
import { useState, useEffect } from "react";
import dayjs from 'dayjs'
import { getWeekDays } from "@/utils/get-week-days";
import * as React from 'react';
import { PopOver } from "../Popover";
import { useDispatch, useSelector } from "react-redux";
import { getAmountDays, setCarpoolState, setCurrentMonth } from "@/store/reducers/driverReducer";

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

  const carpool = useSelector(setCarpoolState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentMonth(currentMonthNumber))
    dispatch(getAmountDays())
    console.log('currentDate mudou ')
  }, [currentDate, carpool])

  // const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // const isDateSelected = !!selectedDate

  // const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  // const describeDate = selectedDate
  //   ? dayjs(selectedDate).format('DD[ de ]MMMM')
  //   : null

  // const selectedDateWithoutTime = selectedDate
  //   ? dayjs(selectedDate).format('YYYY-MM-DD')
  //   : null

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
  const currentMonthNumber = currentDate.format('MM')
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
                      <PopOver date={date} disabled={disabled} />
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