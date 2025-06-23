"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Smartphone, DollarSign, ArrowLeft, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function PaymentPage() {
  const [selectedService, setSelectedService] = useState("")
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const services = [
    { value: "tax-filing", label: "Tax Filing", price: "₹2,500" },
    { value: "gst-return", label: "GST Return Filing", price: "₹1,500" },
    { value: "audit", label: "Business Audit", price: "₹15,000" },
    { value: "bookkeeping", label: "Monthly Bookkeeping", price: "₹5,000" },
    { value: "consultation", label: "Financial Consultation", price: "₹1,000" },
    { value: "payroll", label: "Payroll Management", price: "₹3,000" },
    { value: "custom", label: "Custom Service", price: "Custom Amount" },
  ]

  const handleServiceChange = (value: string) => {
    setSelectedService(value)
    const service = services.find((s) => s.value === value)
    if (service && service.value !== "custom") {
      setAmount(service.price.replace("₹", "").replace(",", ""))
    } else {
      setAmount("")
    }
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your payment gateway
    console.log("Processing payment:", {
      service: selectedService,
      amount,
      paymentMethod,
    })
    alert("Payment processing would be handled by your payment gateway (Razorpay/Stripe)")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Secure Payment</h1>
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="h-5 w-5" />
              <span className="text-sm">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Payment Details</CardTitle>
                <CardDescription>Select your service and complete the payment securely</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <Label htmlFor="service" className="text-base font-medium text-gray-700">
                      Select Service
                    </Label>
                    <Select value={selectedService} onValueChange={handleServiceChange}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{service.label}</span>
                              <span className="ml-4 text-blue-600 font-medium">{service.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Amount */}
                  <div>
                    <Label htmlFor="amount" className="text-base font-medium text-gray-700">
                      Amount (₹)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="mt-2"
                      required
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <Label className="text-base font-medium text-gray-700 mb-4 block">Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center space-x-3 cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">Credit/Debit Card</div>
                            <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center space-x-3 cursor-pointer flex-1">
                          <Smartphone className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-medium">UPI Payment</div>
                            <div className="text-sm text-gray-500">PhonePe, Google Pay, Paytm</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex items-center space-x-3 cursor-pointer flex-1">
                          <DollarSign className="h-5 w-5 text-purple-600" />
                          <div>
                            <div className="font-medium">Net Banking</div>
                            <div className="text-sm text-gray-500">All major banks supported</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Card Details (shown when card is selected) */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input id="cardName" placeholder="John Doe" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                    disabled={!selectedService || !amount}
                  >
                    Pay ₹{amount || "0"} Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Order Summary & Security Info */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedService ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Service</span>
                        <span className="font-medium">{services.find((s) => s.value === selectedService)?.label}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Amount</span>
                        <span className="font-medium">₹{amount || "0"}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Processing Fee</span>
                        <span className="font-medium">₹0</span>
                      </div>
                      <div className="flex justify-between items-center py-2 text-lg font-bold">
                        <span>Total</span>
                        <span className="text-blue-600">₹{amount || "0"}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">Please select a service to see the summary</p>
                  )}
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">PCI DSS compliant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">Secure payment gateway</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">No card details stored</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our support team is here to assist you with any payment-related queries.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Email:</span>
                      <span className="text-blue-600">support@fintacxx.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Phone:</span>
                      <span className="text-blue-600">+91 98765 43210</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
