export interface InputDataI {
  title: string;
  placeholder?: string;
  value: any;
  type?: string;
  required: boolean;
  defaultValue?: string;
  pattern?: string;
  typeOfData?: string;
}

export interface InputsI {
  data: InputDataI[];
}
