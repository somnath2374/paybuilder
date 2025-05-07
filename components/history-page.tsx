"use client"

import { useState } from "react"
import { BarChart, Download, FileText, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ConstructionAnimation } from "@/components/construction-animation"

export function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [periodFilter, setPeriodFilter] = useState("all-time")
  const [workerFilter, setWorkerFilter] = useState("all-workers")
  const [siteFilter, setSiteFilter] = useState("all-sites")

  // Sample payroll history data
  const historyData = [
    {
      period: "Apr 2023",
      name: "John Smith",
      position: "Foreman",
      site: "Site A",
      hours: "172",
      gross: "$5,102",
    },
    {
      period: "Apr 2023",
      name: "Maria Garcia",
      position: "Electrician",
      site: "Site B",
      hours: "168",
      gross: "$5,464",
    },
    {
      period: "Apr 2023",
      name: "Robert Johnson",
      position: "Carpenter",
      site: "Site A",
      hours: "152",
      gross: "$4,180",
    },
    {
      period: "Mar 2023",
      name: "John Smith",
      position: "Foreman",
      site: "Site A",
      hours: "176",
      gross: "$5,225",
    },
    {
      period: "Mar 2023",
      name: "Maria Garcia",
      position: "Electrician",
      site: "Site B",
      hours: "180",
      gross: "$5,895",
    },
    {
      period: "Mar 2023",
      name: "Robert Johnson",
      position: "Carpenter",
      site: "Site A",
      hours: "160",
      gross: "$4,400",
    },
    {
      period: "Feb 2023",
      name: "John Smith",
      position: "Foreman",
      site: "Site A",
      hours: "168",
      gross: "$4,980",
    },
    {
      period: "Feb 2023",
      name: "Maria Garcia",
      position: "Electrician",
      site: "Site B",
      hours: "172",
      gross: "$5,590",
    },
    {
      period: "Feb 2023",
      name: "Robert Johnson",
      position: "Carpenter",
      site: "Site A",
      hours: "164",
      gross: "$4,510",
    },
  ]

  // Filter history data based on search query and filters
  const filteredHistory = historyData.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.position.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPeriod =
      periodFilter === "all-time" ||
      (periodFilter === "this-year" && ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023"].includes(record.period)) ||
      (periodFilter === "last-3-months" && ["Feb 2023", "Mar 2023", "Apr 2023"].includes(record.period))

    const matchesWorker = workerFilter === "all-workers" || record.name === workerFilter
    const matchesSite = siteFilter === "all-sites" || record.site === siteFilter

    return matchesSearch && matchesPeriod && matchesWorker && matchesSite
  })

  // Calculate total hours and pay
  const totalHours = filteredHistory.reduce((sum, record) => sum + Number.parseInt(record.hours), 0)
  const totalPay = filteredHistory.reduce((sum, record) => {
    const amount = Number.parseFloat(record.gross.replace("$", "").replace(",", ""))
    return sum + amount
  }, 0)

  // Get unique workers for filter
  const uniqueWorkers = [...new Set(historyData.map((record) => record.name))]

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payroll History</h2>
          <p className="text-muted-foreground">View and analyze historical payroll records</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export History
          </Button>
          <Button>
            <BarChart className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredHistory.length}</div>
            <p className="text-xs text-muted-foreground">
              {periodFilter === "all-time" ? "All time" : periodFilter === "this-year" ? "This year" : "Last 3 months"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all filtered records</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Pay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPay.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all filtered records</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Payroll Records</CardTitle>
            <CardDescription>Historical payroll data for analysis and reporting</CardDescription>
          </div>
          <div className="hidden md:block">
            <ConstructionAnimation />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search records..."
                  className="w-full pl-8 sm:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select value={periodFilter} onValueChange={setPeriodFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                </SelectContent>
              </Select>
              <Select value={workerFilter} onValueChange={setWorkerFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Worker" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-workers">All Workers</SelectItem>
                  {uniqueWorkers.map((worker, i) => (
                    <SelectItem key={i} value={worker}>
                      {worker}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={siteFilter} onValueChange={setSiteFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Site" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-sites">All Sites</SelectItem>
                  <SelectItem value="Site A">Site A</SelectItem>
                  <SelectItem value="Site B">Site B</SelectItem>
                  <SelectItem value="Site C">Site C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Worker</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Site</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Gross Pay</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredHistory.map((record, i) => (
                  <TableRow key={i}>
                    <TableCell>{record.period}</TableCell>
                    <TableCell className="font-medium">{record.name}</TableCell>
                    <TableCell>{record.position}</TableCell>
                    <TableCell>{record.site}</TableCell>
                    <TableCell>{record.hours}</TableCell>
                    <TableCell>{record.gross}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
