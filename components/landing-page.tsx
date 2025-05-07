"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  ChevronRight,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  HardHat,
  Hammer,
  Plus,
  Ruler,
  Users,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { NewPayrollDialog } from "@/components/new-payroll-dialog"

export function LandingPage() {
  const [showNewPayroll, setShowNewPayroll] = useState(false)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-500/90 to-orange-600/90 px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Construction Payroll Made Simple
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/90">
                PayBuilder streamlines your construction payroll process, saving you time and ensuring your workers get
                paid accurately and on time.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-white/90"
                  onClick={() => setShowNewPayroll(true)}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Payroll
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/workers">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Workers
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-white/10 p-4">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white/20">
                      <HardHat className="h-24 w-24 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 p-2">
                  <Hammer className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300 p-2">
                  <Wrench className="h-8 w-8 text-yellow-800" />
                </div>
                <div className="absolute -bottom-8 right-12 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 p-2">
                  <Ruler className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Workers</CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">142</div>
                <div className="mt-1 flex items-center text-xs text-green-600">
                  <span className="font-medium">+6</span>
                  <span className="ml-1 text-muted-foreground">from last month</span>
                </div>
                <Progress className="mt-3" value={75} />
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$284,532</div>
                <div className="mt-1 flex items-center text-xs text-green-600">
                  <span className="font-medium">+2.5%</span>
                  <span className="ml-1 text-muted-foreground">from last month</span>
                </div>
                <Progress className="mt-3" value={65} />
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payslips</CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                  <FileText className="h-4 w-4 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <div className="mt-1 flex items-center text-xs text-orange-600">
                  <span className="font-medium">Due in 3 days</span>
                </div>
                <Progress className="mt-3" value={40} />
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payday</CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">May 15</div>
                <div className="mt-1 flex items-center text-xs text-purple-600">
                  <span className="font-medium">8 days remaining</span>
                </div>
                <Progress className="mt-3" value={80} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Payroll Activity */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Recent Payroll Activity</CardTitle>
                    <CardDescription>Overview of the last 30 days</CardDescription>
                  </div>
                  <BarChart3 className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Construction-themed chart visualization */}
                  <div className="h-[250px] w-full">
                    <div className="flex h-full items-end justify-around gap-2 pb-4">
                      <div className="group flex w-16 flex-col items-center">
                        <div className="relative h-full w-8 overflow-hidden rounded-t-md bg-gray-200">
                          <div
                            className="absolute bottom-0 w-full animate-build bg-yellow-500"
                            style={{ height: "65%" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs font-medium">Site A</span>
                        <div className="invisible absolute -top-10 rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:visible">
                          $42,500
                        </div>
                      </div>
                      <div className="group flex w-16 flex-col items-center">
                        <div className="relative h-full w-8 overflow-hidden rounded-t-md bg-gray-200">
                          <div
                            className="absolute bottom-0 w-full animate-build bg-blue-500"
                            style={{ height: "80%", animationDelay: "0.2s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs font-medium">Site B</span>
                        <div className="invisible absolute -top-10 rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:visible">
                          $38,750
                        </div>
                      </div>
                      <div className="group flex w-16 flex-col items-center">
                        <div className="relative h-full w-8 overflow-hidden rounded-t-md bg-gray-200">
                          <div
                            className="absolute bottom-0 w-full animate-build bg-orange-500"
                            style={{ height: "45%", animationDelay: "0.4s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs font-medium">Site C</span>
                        <div className="invisible absolute -top-10 rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:visible">
                          $24,300
                        </div>
                      </div>
                      <div className="group flex w-16 flex-col items-center">
                        <div className="relative h-full w-8 overflow-hidden rounded-t-md bg-gray-200">
                          <div
                            className="absolute bottom-0 w-full animate-build bg-green-500"
                            style={{ height: "60%", animationDelay: "0.6s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs font-medium">Site D</span>
                        <div className="invisible absolute -top-10 rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:visible">
                          $32,100
                        </div>
                      </div>
                      <div className="group flex w-16 flex-col items-center">
                        <div className="relative h-full w-8 overflow-hidden rounded-t-md bg-gray-200">
                          <div
                            className="absolute bottom-0 w-full animate-build bg-red-500"
                            style={{ height: "70%", animationDelay: "0.8s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs font-medium">Site E</span>
                        <div className="invisible absolute -top-10 rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:visible">
                          $36,400
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Site</TableHead>
                          <TableHead>Workers</TableHead>
                          <TableHead>Hours</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { site: "Site A", workers: 48, hours: "7,680", amount: "$42,500" },
                          { site: "Site B", workers: 36, hours: "5,760", amount: "$38,750" },
                          { site: "Site C", workers: 28, hours: "4,480", amount: "$24,300" },
                        ].map((site) => (
                          <TableRow key={site.site}>
                            <TableCell className="font-medium">{site.site}</TableCell>
                            <TableCell>{site.workers}</TableCell>
                            <TableCell>{site.hours}</TableCell>
                            <TableCell className="text-right">{site.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/history">
                    View Complete History
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Upcoming Payments & Recent Payslips */}
            <div className="flex flex-col gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Upcoming Payments</CardTitle>
                      <CardDescription>Scheduled for the next 7 days</CardDescription>
                    </div>
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Site A Crew", amount: "$42,500", date: "May 15", progress: 90 },
                      { name: "Site B Crew", amount: "$38,750", date: "May 15", progress: 90 },
                      { name: "Management", amount: "$24,300", date: "May 15", progress: 90 },
                      { name: "Contractors", amount: "$18,600", date: "May 17", progress: 75 },
                    ].map((payment, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{payment.name}</div>
                            <div className="text-sm text-muted-foreground">{payment.date}</div>
                          </div>
                          <div className="text-right font-semibold">{payment.amount}</div>
                        </div>
                        <Progress value={payment.progress} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/payroll">
                      Manage Payroll
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Recent Payslips</CardTitle>
                      <CardDescription>Latest generated documents</CardDescription>
                    </div>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { worker: "John Smith", period: "Apr 2023", status: "Paid", amount: "$3,450" },
                      { worker: "Maria Garcia", period: "Apr 2023", status: "Paid", amount: "$4,200" },
                      { worker: "Robert Johnson", period: "Apr 2023", status: "Paid", amount: "$3,800" },
                      { worker: "Sarah Williams", period: "Apr 2023", status: "Pending", amount: "$3,950" },
                    ].map((payslip, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{payslip.worker}</div>
                          <div className="text-sm text-muted-foreground">{payslip.period}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={payslip.status === "Paid" ? "default" : "outline"}>{payslip.status}</Badge>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/payslips">
                      View All Payslips
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Button className="h-auto flex-col gap-2 p-6" asChild>
              <Link href="/workers">
                <Users className="h-8 w-8" />
                <span className="text-lg">Add Worker</span>
              </Link>
            </Button>
            <Button
              className="h-auto flex-col gap-2 bg-green-600 p-6 hover:bg-green-700"
              onClick={() => setShowNewPayroll(true)}
            >
              <CreditCard className="h-8 w-8" />
              <span className="text-lg">New Payroll</span>
            </Button>
            <Button className="h-auto flex-col gap-2 bg-blue-600 p-6 hover:bg-blue-700" asChild>
              <Link href="/payslips">
                <FileText className="h-8 w-8" />
                <span className="text-lg">Generate Payslips</span>
              </Link>
            </Button>
            <Button className="h-auto flex-col gap-2 bg-orange-600 p-6 hover:bg-orange-700" asChild>
              <Link href="/history">
                <BarChart3 className="h-8 w-8" />
                <span className="text-lg">View Reports</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <NewPayrollDialog open={showNewPayroll} onOpenChange={setShowNewPayroll} />
    </div>
  )
}
