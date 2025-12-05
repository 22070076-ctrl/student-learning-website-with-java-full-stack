"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgressBar } from "@/components/progress-bar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const studentData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    joinDate: "Jan 2024",
    totalLearningHours: 124,
    coursesEnrolled: 5,
    certificatesEarned: 2,
    currentStreak: 7,
  }

  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 75,
      lessons: 48,
      completedLessons: 36,
      status: "In Progress",
      nextLesson: "Advanced CSS Layouts",
      instructor: "Sarah Chen",
      lastAccessed: "2 hours ago",
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      progress: 45,
      lessons: 50,
      completedLessons: 22,
      status: "In Progress",
      nextLesson: "Hooks and Context API",
      instructor: "Mike Johnson",
      lastAccessed: "1 day ago",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      progress: 20,
      lessons: 60,
      completedLessons: 12,
      status: "In Progress",
      nextLesson: "Getting Started",
      instructor: "Lisa Wang",
      lastAccessed: "3 days ago",
    },
  ]

  const achievements = [
    { title: "Quick Learner", description: "Complete 5 lessons in one day", unlocked: true, date: "Jan 15" },
    { title: "Consistent Learner", description: "7-day learning streak", unlocked: true, date: "Jan 20" },
    { title: "Course Master", description: "Complete a course with 95%+ score", unlocked: true, date: "Feb 1" },
    { title: "Social Butterfly", description: "Help 3 fellow students", unlocked: false },
    { title: "Speed Demon", description: "Complete a course in 2 weeks", unlocked: false },
    { title: "Certification Pro", description: "Earn 5 certificates", unlocked: false },
  ]

  const recentActivity = [
    { activity: "Completed lesson: JavaScript DOM Manipulation", date: "2 hours ago", type: "lesson" },
    { activity: "Scored 95% on CSS Basics Quiz", date: "Yesterday", type: "quiz" },
    { activity: "Enrolled in Advanced React Patterns", date: "2 days ago", type: "enrollment" },
    { activity: "Earned certificate: Web Basics", date: "1 week ago", type: "certificate" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, {studentData.name}!</h1>
          <p className="text-muted-foreground">Keep up your learning streak and master new skills</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Learning Hours</p>
            <p className="text-3xl font-bold text-primary">{studentData.totalLearningHours}+</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Courses Enrolled</p>
            <p className="text-3xl font-bold text-accent">{studentData.coursesEnrolled}</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Certificates</p>
            <p className="text-3xl font-bold text-accent">{studentData.certificatesEarned}</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Learning Streak</p>
            <p className="text-3xl font-bold text-primary">{studentData.currentStreak} days</p>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* My Courses Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        course.status === "In Progress" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-semibold text-foreground">{course.progress}%</span>
                    </div>
                    <ProgressBar progress={course.progress} />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Lessons Completed</p>
                      <p className="text-sm font-semibold text-foreground">
                        {course.completedLessons}/{course.lessons}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Next Lesson</p>
                      <p className="text-sm font-semibold text-foreground">{course.nextLesson}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Last Accessed</p>
                      <p className="text-sm font-semibold text-foreground">{course.lastAccessed}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Continue Learning
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, idx) => (
                <Card
                  key={idx}
                  className={`p-6 border ${achievement.unlocked ? "border-accent/50 bg-accent/5" : "border-border opacity-50"}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    <span className="text-2xl">{achievement.unlocked ? "✓" : "🔒"}</span>
                  </div>
                  {achievement.unlocked && <p className="text-xs text-accent mt-3">Unlocked on {achievement.date}</p>}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-4">
            {recentActivity.map((item, idx) => (
              <Card key={idx} className="p-4 flex items-start gap-4">
                <div
                  className={`w-3 h-3 rounded-full mt-1.5 ${
                    item.type === "lesson"
                      ? "bg-primary"
                      : item.type === "quiz"
                        ? "bg-accent"
                        : item.type === "certificate"
                          ? "bg-secondary"
                          : "bg-muted"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-foreground">{item.activity}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
