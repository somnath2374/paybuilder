"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, CreditCard, DollarSign, Download, FileText, Plus, Users, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ConstructionAnimation } from "@/components/construction-animation"
import { NewPayrollDialog } from "@/components/new-payroll-dialog"

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showNewPayroll, setShowNewPayroll] = useState(false)

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, HR Admin</h2>
          <p className="text-muted-foreground">Here's an overview of your construction payroll system</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowNewPayroll(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Payroll
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workers">Workers</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Workers</CardTitle>
                <Users className="h-4 w-4 text-construction-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground">+6 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
                <DollarSign className="h-4 w-4 text-construction-orange" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$284,532</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payslips</CardTitle>
                <FileText className="h-4 w-4 text-construction-yellow" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Due in 3 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payday</CardTitle>
                <Calendar className="h-4 w-4 text-construction-gray" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">May 15</div>
                <p className="text-xs text-muted-foreground">8 days remaining</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Payroll Activity</CardTitle>
                  <CardDescription>Overview of the last 30 days of payroll activity</CardDescription>
                </div>
                <ConstructionAnimation />
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  {/* Construction-themed chart visualization */}
                  <div className="flex h-full flex-col items-center justify-center p-6">
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col items-center">
                        <div className="h-[180px] w-8 bg-gray-200 relative">
                          <div
                            className="absolute bottom-0 w-full bg-yellow-500 animate-build"
                            style={{ height: "65%" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs">Site A</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-[180px] w-8 bg-gray-200 relative">
                          <div
                            className="absolute bottom-0 w-full bg-blue-500 animate-build"
                            style={{ height: "80%", animationDelay: "0.2s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs">Site B</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-[180px] w-8 bg-gray-200 relative">
                          <div
                            className="absolute bottom-0 w-full bg-orange-500 animate-build"
                            style={{ height: "45%", animationDelay: "0.4s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs">Site C</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-[180px] w-8 bg-gray-200 relative">
                          <div
                            className="absolute bottom-0 w-full bg-green-500 animate-build"
                            style={{ height: "60%", animationDelay: "0.6s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs">Site D</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-[180px] w-8 bg-gray-200 relative">
                          <div
                            className="absolute bottom-0 w-full bg-red-500 animate-build"
                            style={{ height: "70%", animationDelay: "0.8s" }}
                          ></div>
                        </div>
                        <span className="mt-2 text-xs">Site E</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Scheduled payments for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Site A Crew", amount: "$42,500", date: "May 15" },
                    { name: "Site B Crew", amount: "$38,750", date: "May 15" },
                    { name: "Management", amount: "$24,300", date: "May 15" },
                    { name: "Contractors", amount: "$18,600", date: "May 17" },
                  ].map((payment, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{payment.name}</p>
                        <p className="text-sm text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="font-medium">{payment.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/payroll">
                    <FileText className="mr-2 h-4 w-4" />
                    View All Scheduled Payments
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Payslips</CardTitle>
                <CardDescription>Recently generated payslips</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/payslips">
                  <FileText className="mr-2 h-4 w-4" />
                  View All
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Worker</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Pay Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      worker: "John Smith",
                      id: "W-1234",
                      period: "Apr 1-30, 2023",
                      amount: "$3,450",
                      status: "Paid",
                    },
                    {
                      worker: "Maria Garcia",
                      id: "W-1235",
                      period: "Apr 1-30, 2023",
                      amount: "$4,200",
                      status: "Paid",
                    },
                    {
                      worker: "Robert Johnson",
                      id: "W-1236",
                      period: "Apr 1-30, 2023",
                      amount: "$3,800",
                      status: "Paid",
                    },
                    {
                      worker: "Sarah Williams",
                      id: "W-1237",
                      period: "Apr 1-30, 2023",
                      amount: "$3,950",
                      status: "Pending",
                    },
                    {
                      worker: "David Brown",
                      id: "W-1238",
                      period: "Apr 1-30, 2023",
                      amount: "$4,100",
                      status: "Pending",
                    },
                  ].map((payslip, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{payslip.worker}</TableCell>
                      <TableCell>{payslip.id}</TableCell>
                      <TableCell>{payslip.period}</TableCell>
                      <TableCell>{payslip.amount}</TableCell>
                      <TableCell>
                        <Badge variant={payslip.status === "Paid" ? "default" : "outline"}>{payslip.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workers" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Workers Overview</CardTitle>
                <CardDescription>Quick access to worker information</CardDescription>
              </div>
              <Button asChild>
                <Link href="/workers">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Workers
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Site</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "John Smith",
                        position: "Foreman",
                        site: "Site A",
                        status: "Active",
                      },
                      {
                        name: "Maria Garcia",
                        position: "Electrician",
                        site: "Site B",
                        status: "Active",
                      },
                      {
                        name: "Robert Johnson",
                        position: "Carpenter",
                        site: "Site A",
                        status: "Active",
                      },
                      {
                        name: "Sarah Williams",
                        position: "Plumber",
                        site: "Site C",
                        status: "Active",
                      },
                      {
                        name: "David Brown",
                        position: "Laborer",
                        site: "Site B",
                        status: "Inactive",
                      },
                    ].map((worker, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{worker.name}</TableCell>
                        <TableCell>{worker.position}</TableCell>
                        <TableCell>{worker.site}</TableCell>
                        <TableCell>
                          <Badge variant={worker.status === "Active" ? "default" : "secondary"}>{worker.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Current Payroll</CardTitle>
                <CardDescription>May 2023 payroll status</CardDescription>
              </div>
              <Button asChild>
                <Link href="/payroll">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Manage Payroll
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Site</TableHead>
                      <TableHead>Workers</TableHead>
                      <TableHead>Total Hours</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        site: "Site A",
                        workers: "48",
                        hours: "7,680",
                        amount: "$215,040",
                        status: "In Progress",
                      },
                      {
                        site: "Site B",
                        workers: "36",
                        hours: "5,760",
                        amount: "$172,800",
                        status: "In Progress",
                      },
                      {
                        site: "Site C",
                        workers: "28",
                        hours: "4,480",
                        amount: "$134,400",
                        status: "Not Started",
                      },
                    ].map((site, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{site.site}</TableCell>
                        <TableCell>{site.workers}</TableCell>
                        <TableCell>{site.hours}</TableCell>
                        <TableCell>{site.amount}</TableCell>
                        <TableCell>
                          <Badge variant={site.status === "In Progress" ? "default" : "outline"}>{site.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Payroll History</CardTitle>
                <CardDescription>Recent payroll periods</CardDescription>
              </div>
              <Button asChild>
                <Link href="/history">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  View Full History
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Workers Paid</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        period: "Apr 2023",
                        workers: "142",
                        amount: "$284,532",
                        status: "Completed",
                      },
                      {
                        period: "Mar 2023",
                        workers: "138",
                        amount: "$276,450",
                        status: "Completed",
                      },
                      {
                        period: "Feb 2023",
                        workers: "135",
                        amount: "$270,810",
                        status: "Completed",
                      },
                    ].map((period, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{period.period}</TableCell>
                        <TableCell>{period.workers}</TableCell>
                        <TableCell>{period.amount}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{period.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <NewPayrollDialog open={showNewPayroll} onOpenChange={setShowNewPayroll} />
    </div>
  )
}
