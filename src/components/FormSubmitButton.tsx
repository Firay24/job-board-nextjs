"use client";
import React, { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const FormSubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      disabled={props.disabled || pending}
      type="submit"
      className="w-full"
    >
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {props.children}
      </span>
    </Button>
  );
};

export default FormSubmitButton;
