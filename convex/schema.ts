import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    habits: defineTable({ name: v.string(), emoji: v.string(), frequency: v.string(), color: v.optional(v.string()) }),
    entries: defineTable({ habitId: v.id("habits"), date: v.string(), completed: v.boolean() }).index("by_habit", ["habitId"]).index("by_date", ["date"]),
    streaks: defineTable({ habitId: v.id("habits"), current: v.number(), best: v.number() }).index("by_habit", ["habitId"])
});
