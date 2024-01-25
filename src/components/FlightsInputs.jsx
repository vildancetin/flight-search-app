
import { Label, TextInput } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';
const FlightsInputs = () => {
  return (
    <>
    <div className='flex justify-center gap-8 mb-5'>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Departure" />
        </div>
        <TextInput id="base" type="text" sizing="md" className='w-[500px]' />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Destination" />
        </div>
        <TextInput id="base" type="text" sizing="md" className='w-[500px]' />
      </div>
    </div>
    <div className='flex justify-center gap-8'>
        <Datepicker className='w-[500px]' />
        <Datepicker className='w-[500px]' />
    </div>
    </>
  );
};

export default FlightsInputs;
