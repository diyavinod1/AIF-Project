import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText, BarChart3, PenTool, Linkedin } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Resume Input",
    url: createPageUrl("ResumeInput"),
    icon: FileText,
  },
  {
    title: "Analysis Results",
    url: createPageUrl("Analysis"),
    icon: BarChart3,
  },
  {
    title: "Resume Output",
    url: createPageUrl("ResumeOutput"),
    icon: PenTool,
  },
  {
    title: "LinkedIn Optimizer",
    url: createPageUrl("LinkedInOptimizer"),
    icon: Linkedin,
  },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <style>
          {`
            :root {
              --primary: 221 83% 53%;
              --primary-foreground: 210 40% 98%;
              --secondary: 210 40% 96%;
              --secondary-foreground: 222 84% 4.9%;
              --accent: 221 83% 53%;
              --accent-foreground: 210 40% 98%;
            }
          `}
        </style>
        
        <Sidebar className="border-r border-slate-200/60 bg-white/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-slate-200/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">ResumeAI Pro</h2>
                <p className="text-xs text-slate-500 font-medium">ATS Optimizer & Career Tool</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
                Workflow
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`group hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg px-3 py-2.5 ${
                          location.pathname === item.url 
                            ? 'bg-blue-50 text-blue-700 border border-blue-200/50' 
                            : 'text-slate-600 hover:border hover:border-blue-100'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3">
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center ${
                              location.pathname === item.url 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-slate-200 text-slate-500 group-hover:bg-blue-200 group-hover:text-blue-600'
                            }`}>
                              {index + 1}
                            </span>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-sm">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200" />
              <h1 className="text-xl font-bold text-slate-900">ResumeAI Pro</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
