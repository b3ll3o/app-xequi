"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import api from "@/app/api/api";
import { AxiosError } from "axios";
import { ErrosResponse } from "@/app/usuarios/domain/responses/erros.response";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Campo não pode ser vazio",
    })
    .email("Email inválido."),
  senha: z
    .string()
    .min(5, "Minimo de 5 caracteres.")
    .max(20, "Maximo de 20 caracteres"),
});

export type LoginUsuarioFormProps = {
  sucessoHandler?: Function,
  erroHandler?: Function
}

export function LoginUsuarioForm({sucessoHandler}: LoginUsuarioFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { email, senha } = data;
    api
      .post("/auth/login", { email, senha })
      .then((r) => {
        if(sucessoHandler){
          sucessoHandler()
        }
      })
      .catch((res: AxiosError<ErrosResponse>) => {
        const data = res.response?.data;
        if(data){
          data.erros.forEach(e =>
            form.setError(getCampo(e.campo), { message: e.mensagens[0] }))
        }
      });
  }

  function getCampo(campo: string) {
    return campo === 'email'
      ? 'email'
      : 'senha'
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="senha"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Senha" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Entrar</Button>
      </form>
    </Form>
  );
}
