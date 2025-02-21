"use client";

import Button from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import logo from "../assets/logo.svg";

const subscriptionSchema = z.object({
  name: string().min(3, "Digite um nome válido"),
  email: string().email("Digite um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  const handleSubscribe = (data: SubscriptionSchema) => {
    console.log(data);
  };

  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="logo" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left ">
          <span className="text-blue">CodeCraft</span> Summit{" "}
          {new Date().getFullYear()}
        </h1>
      </div>
      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:tetx-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSubscribe)}
          className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
        >
          <h2 className="font-heading font-semibold text-gray-200 text-xl">
            Inscrição
          </h2>

          <div className="space-y-3 ">
            <div className="space-y-2">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>

                <InputField
                  type="text"
                  placeholder="Nome completo"
                  {...register("name")}
                />
              </InputRoot>

              {errors.name && (
                <p className="text-danger font-semibold text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>

                <InputField
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
              </InputRoot>

              {errors.email && (
                <p className="text-danger font-semibold text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <Button type="submit">
            Confirmar
            <ArrowRight />
          </Button>
        </form>
      </div>
    </div>
  );
}
