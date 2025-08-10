import {Button, TextField} from "@mui/material";
import React, {useState} from "react";

export const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // @ts-expect-error types
    const formData = new FormData(event.target);

    formData.append("access_key", "1dd2f13b-f2ea-46ff-85e1-0b4c892befb8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // @ts-expect-error types
      event.target.reset();
    } else {
      console.log("Error", data);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <TextField type="text" name="name" required label="Ваше имя" />

        <TextField type="tel" name="Телефон" required label="Телефон" />
        <TextField
          name="message"
          required
          label="Сообщение"
          multiline
          rows={4}
        />
        <Button type="submit" loading={isLoading}>
          Отправить
        </Button>
      </form>
    </div>
  );
};
