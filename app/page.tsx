import { Form } from "@/components/ui/form";
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {username: ""}
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-center text-2xl-font-semibold my-8 text-stone-900">React Hook Form</h2>
    
    </main>
  );
}
