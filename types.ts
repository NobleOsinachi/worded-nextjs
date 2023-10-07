export enum QuestionType {
  Opposite,
  Similar,
}

export type QuantityUpdate = Record<number, string>;

export type PaymentFormField = "fullName" | "email";

export type PaymentFormType = Record<PaymentFormField, string>;
