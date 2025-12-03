import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe("pk_test_your_stripe_publishable_key_here");

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // In a real implementation, you would call your backend to create a PaymentIntent
      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Donation Successful",
        description: `Thank you for your ${frequency} donation of $${amount}!`,
      });

      // Reset form
      setAmount("");
      setName("");
      setEmail("");
      setFrequency("one-time");
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="frequency">Donation Frequency</Label>
        <Select value={frequency} onValueChange={setFrequency}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one-time">One-time</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Donation Amount ($)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          placeholder="50.00"
          min="1"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label>Payment Information</Label>
        <div className="p-4 border rounded-lg bg-muted/50">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full"
        size="lg"
      >
        {isProcessing ? (
          "Processing..."
        ) : (
          <>
            <Heart className="mr-2 h-4 w-4" />
            Donate ${amount || "0"}
          </>
        )}
      </Button>
    </form>
  );
};

const DonationSystem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Support Our Ministry
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6">
            Your generous donations help us continue our mission and serve our community
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-2 border-secondary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CreditCard className="h-6 w-6 text-secondary" />
                Secure Donation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Elements stripe={stripePromise}>
                <DonationForm />
              </Elements>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Your payment information is secure and encrypted.</p>
            <p>All donations are tax-deductible. Contact us for a receipt.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSystem;