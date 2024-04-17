import { Control } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

type CustomFormFieldProps = {
  control: Control<any>
  name: string
}

export const CustomFormField = ({ control, name }: CustomFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
type CustomFormSelectProps = CustomFormFieldProps & {
  items: string[]
  labelText?: string
}

export function CustomFormSelect({ control, name, items, labelText }: CustomFormSelectProps)  {

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{labelText || name}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              </FormControl>
              <SelectContent>
                {items.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
         
            </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
                                                                                       
// const FormComponents = () => {
//   return (
//     <div>FormComponents</div>
//   )
// }

// export default FormComponents

export default CustomFormSelect
