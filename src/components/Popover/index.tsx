import * as Popover from '@radix-ui/react-popover'
import { CalendarDay, Label, PopoverDay, RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { setCarpoolDay, setDriversState } from '@/store/reducers/driverReducer';
import dayjs from 'dayjs';
import { Text } from '@ignite-ui/react';
import { useState } from 'react';

export function PopOver({ date, disabled }: any) {
  const [driverId, setDriverId] = useState('')
  const [driverName, setDriverName] = useState('')
  const dispatch = useDispatch()
  const drivers = useSelector(setDriversState)

  const handleSetDriver = (id: any) => {
    const dayInMonth = dayjs(date).format('YYYY-MM-DD')
    const props = { id, dayInMonth }

    setDriverId(id)
    dispatch(setCarpoolDay(props))
  };

  const RadioGroupDemo = ({ value, id }: any) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value={id} id={id}>
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label>
          {value.name}
        </Label>
      </div>
    )
  }

  return (
    <Popover.Root>
      <CalendarDay disabled={disabled}>{date.get('date')}</CalendarDay>
      <Popover.Portal>
        <PopoverDay >
          <form>
            <RadioGroupRoot
              aria-label="View density"
              value={driverId}
              onValueChange={(props) => handleSetDriver(props)}
            >
              <Text>Quem Levou?</Text>
              {drivers.map(driver => {
                return <RadioGroupDemo key={driver.id} value={driver} id={driver.id} />
              })}
            </RadioGroupRoot>
          </form>
          <Popover.Arrow />
        </PopoverDay>
      </Popover.Portal>
    </Popover.Root>
  )
}