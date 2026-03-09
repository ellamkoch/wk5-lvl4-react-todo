/**
 * CustomCheckbox
 * Wrapper around shadcn Checkbox to apply consistent styling.
 *
 * @param {boolean} checked - Whether the checkbox is checked
 * @param {(checked: boolean) => void} onChange - Called when checkbox toggles
 */

import { Checkbox } from "@/components/ui/checkbox";



const CustomCheckbox = ({ checked, onChange }) => {

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={onChange}
      className="
        h-5 w-5 rounded-full
        border border-border
      data-[state=checked]:text-white
        data-[state=checked]:border--check-gradient
        data-[state=checked]:[background-image:var(--check-gradient)]
      "
    />
  );
};

export default CustomCheckbox;
//h-5 w-5 rounded-full makes the check box a circle
//transparent line means the ring disappears when its checked.
//2nd checked line means that its doing the gradient color from the index.css
