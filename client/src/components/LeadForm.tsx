import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function LeadForm() {
  const { mutate, isPending, isSuccess } = useCreateLead();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      quantity: 1
    }
  });

  function onSubmit(data: InsertLead) {
    mutate(data, {
      onSuccess: () => setSubmitted(true)
    });
  }

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-100 shadow-xl"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Order Reserved!</h3>
        <p className="text-green-700 mb-6">
          Thank you for your interest. Our team will contact you shortly to confirm your size and shipping details.
        </p>
        <Button 
          variant="outline" 
          className="border-green-600 text-green-700 hover:bg-green-100"
          onClick={() => setSubmitted(false)}
        >
          Place Another Order
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-primary to-blue-500" />
      
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Secure Your Pair Now</h3>
        <p className="text-muted-foreground mt-2">Special offer ends soon. Don't miss out!</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  GET MY 50% OFF <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" /> 256-bit SSL Secure Payment
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
