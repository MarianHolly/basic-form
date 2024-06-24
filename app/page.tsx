"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

// SCHEMA
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function Home() {
  const { toast } = useToast();

  // define a FORM
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  });

  // SUBMIT function
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Submitted!",
      description: `${values}`,
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-center text-2xl-font-semibold my-8 text-stone-900">React Hook Form</h2>
    </main>
  );
}
