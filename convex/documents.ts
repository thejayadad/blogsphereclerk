import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.string(),
    userId: v.string(),
  })
    .index("by_user_id", ["userId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["userId"],
    }),
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    createdAt: v.string(),
  }).index("by_email", ["email"]),
});
