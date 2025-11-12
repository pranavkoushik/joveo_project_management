# 📝 Project Template

Use this template when adding new projects to `src/projects.json`.

## Copy-Paste Template

```json
{
  "id": "proj-X",
  "title": "Your Project Title Here",
  "description": "Brief description of the project goals, scope, and expected outcomes. Keep it concise but informative.",
  "status": "Active",
  "owners": ["Your Name", "Team Member Name"],
  "lastUpdated": "2025-11-12",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "links": [
    { 
      "label": "Design Doc (Google Drive)", 
      "url": "https://drive.google.com/your-document-id" 
    },
    { 
      "label": "Project Roadmap (Notion)", 
      "url": "https://notion.so/your-page-id" 
    }
  ]
}
```

## Field Guidelines

### `id` (Required)
- **Format:** `proj-X` where X is a number
- **Example:** `"proj-7"`, `"proj-8"`, `"proj-9"`
- **Rules:** Must be unique, sequential numbering recommended

### `title` (Required)
- **Length:** 5-100 characters
- **Style:** Title Case
- **Examples:**
  - ✅ "AI-Powered Budget Optimization"
  - ✅ "Global Supplier Network Expansion"
  - ❌ "test" (too short)
  - ❌ "this is a very long title that goes on and on and exceeds the maximum character limit" (too long)

### `description` (Required)
- **Length:** 20-500 characters
- **Style:** 1-3 sentences, professional tone
- **Should include:**
  - What the project does
  - Key goals or outcomes
  - Target audience or region (if applicable)
- **Examples:**
  - ✅ "Building a standardized framework for rapid integration with new job boards to reduce onboarding time from weeks to days."
  - ✅ "PoC to automatically discover suppliers using structured feeds and AI-powered matching algorithms."

### `status` (Required)
- **Options:** `"Active"`, `"Paused"`, `"Completed"`, `"Upcoming"`
- **Color coding:**
  - `Active` = Green (ongoing work)
  - `Paused` = Yellow (temporarily on hold)
  - `Completed` = Blue (finished)
  - `Upcoming` = Purple (planned/not started)

### `owners` (Required)
- **Format:** Array of full names
- **Example:** `["Sarah Martinez", "John Smith", "Priya Patel"]`
- **Rules:**
  - At least 1 owner required
  - Use full names (first + last)
  - Initials will be auto-generated for avatars

### `lastUpdated` (Required)
- **Format:** `YYYY-MM-DD`
- **Example:** `"2025-11-12"`
- **Rules:**
  - Must be valid date
  - ISO 8601 format
  - Update whenever project info changes

### `tags` (Required)
- **Format:** Array of short labels
- **Example:** `["PoC", "AI", "APAC", "Sourcing"]`
- **Suggested tags:**
  - **Type:** `"PoC"`, `"MVP"`, `"Production"`
  - **Technology:** `"AI"`, `"ML"`, `"Automation"`, `"Integration"`
  - **Category:** `"Sourcing"`, `"Analytics"`, `"Partnerships"`
  - **Region:** `"APAC"`, `"EMEA"`, `"LATAM"`, `"NA"`
  - **Status:** `"Research"`, `"Development"`, `"Testing"`
- **Rules:**
  - At least 1 tag
  - Keep tags short (2-15 characters)
  - Use consistent naming

### `links` (Required)
- **Format:** Array of objects with `label` and `url`
- **Example:**
```json
[
  { "label": "Design Doc (Google Drive)", "url": "https://drive.google.com/file/d/abc123" },
  { "label": "Technical Spec (Confluence)", "url": "https://confluence.example.com/page" },
  { "label": "Notion Roadmap", "url": "https://notion.so/roadmap-xyz" }
]
```
- **Label guidelines:**
  - Describe the document type
  - Mention the platform in parentheses
  - Examples: "API Docs (Google Drive)", "Meeting Notes (Notion)", "Benchmark Sheet (Sheets)"
- **URL guidelines:**
  - Must be complete URL with `http://` or `https://`
  - Test that links work before adding
  - Ensure proper sharing permissions (anyone with link can view)

## Common Platforms

### Google Drive
```json
{ "label": "Design Doc (Google Drive)", "url": "https://drive.google.com/file/d/YOUR_FILE_ID" }
```

### Notion
```json
{ "label": "Project Page (Notion)", "url": "https://notion.so/your-workspace/page-id" }
```

### Confluence
```json
{ "label": "Technical Spec (Confluence)", "url": "https://yourorg.atlassian.net/wiki/spaces/..." }
```

### Google Sheets
```json
{ "label": "Data Analysis (Sheets)", "url": "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID" }
```

## Validation Checklist

Before committing:
- [ ] Valid JSON syntax (commas, quotes, brackets)
- [ ] Unique project ID
- [ ] All required fields present
- [ ] Status is one of: Active, Paused, Completed, Upcoming
- [ ] Date in YYYY-MM-DD format
- [ ] At least 1 owner, 1 tag, 1 link
- [ ] All URLs are complete and working
- [ ] No trailing commas
- [ ] Proper quote usage (double quotes only)

## Testing

After adding a project:

```powershell
# Test locally
npm run dev

# Open browser to http://localhost:5173
# Verify your new project appears
# Test all links open correctly
# Check modal displays all info
```

## Full Example

Here's a complete, validated project entry:

```json
{
  "id": "proj-10",
  "title": "Smart Budget Allocation System",
  "description": "Developing an AI-powered system to optimize budget allocation across multiple advertising channels based on historical performance data and market trends.",
  "status": "Active",
  "owners": ["Emily Chen", "Marcus Rodriguez"],
  "lastUpdated": "2025-11-12",
  "tags": ["AI", "Optimization", "Analytics", "MVP"],
  "links": [
    { 
      "label": "Product Requirements (Google Drive)", 
      "url": "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9" 
    },
    { 
      "label": "Technical Architecture (Confluence)", 
      "url": "https://joveo.atlassian.net/wiki/spaces/TECH/pages/123456" 
    },
    { 
      "label": "Sprint Board (Notion)", 
      "url": "https://notion.so/joveo/smart-budget-board" 
    }
  ]
}
```

## Need Help?

- Check `projects.schema.json` for validation rules
- Review existing projects in `src/projects.json` for examples
- Test locally before committing
- Contact project manager with questions

---

**Template Version:** 1.0  
**Last Updated:** November 2025
