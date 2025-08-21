# IUOE Local 825 Branding - Bulldozer™

## Overview
This document outlines the comprehensive branding transformation of the Open WebUI application into **Bulldozer™** - the AI Assistant for IUOE Local 825's Executive Leadership Team, Managers, and Collective Bargaining Managers.

## Brand Identity
- **App Name**: Bulldozer™
- **Target Audience**: IUOE Local 825 Leadership Team
- **Industry Focus**: Construction and Electrical Engineering
- **Geographic Coverage**: New Jersey and New York
- **Union**: International Union of Operating Engineers (IUOE) Local 825

## Key Changes Made

### 1. Application Branding
- **Package Name**: Changed from `open-webui` to `bulldozer-ai`
- **App Title**: Updated from "Open WebUI" to "Bulldozer™"
- **Meta Description**: "Bulldozer™ - The AI Assistant for IUOE Local 825 Leadership Team"
- **Favicon**: Replaced with Local 825 logo (`/src/825.png`)

### 2. Visual Identity
- **Logo**: IUOE Local 825 logo used throughout the application
- **Color Scheme**: Construction and union-themed colors
  - Union Orange: `#ff6b35`
  - Union Blue: `#1e3a8a`
  - Union Yellow: `#fbbf24`
  - Union Gray: `#374151`
  - Union Dark: `#111827`
  - Union Light: `#f9fafb`

### 3. Construction-Themed Model Names
AI models now display with construction-themed names while maintaining their original backend identifiers:

#### OpenAI Models
- `gpt-4o` → 🏗️ Master Builder
- `gpt-4o-mini` → 🔨 Site Foreman
- `gpt-4-turbo` → 🚧 Project Manager
- `gpt-4` → 🏢 Construction Chief
- `gpt-3.5-turbo` → 👷 Safety Inspector

#### Claude Models
- `claude-3-5-sonnet` → ⚡ Power Grid Specialist
- `claude-3-5-haiku` → 🔌 Electrical Engineer
- `claude-3-opus` → 🏭 Industrial Master
- `claude-3-sonnet` → 🏗️ Structural Expert
- `claude-3-haiku` → ⚙️ Systems Technician

#### Ollama Models
- `llama3.2` → 🚛 Heavy Equipment Operator
- `llama3.1` → 🏗️ Foundation Specialist
- `llama3` → 🔨 General Contractor
- `codellama` → 💻 Digital Foreman
- `mistral` → 🌫️ Site Surveyor
- `gemma` → 💎 Quality Control

### 4. Updated User Interface

#### Authentication Page
- Local 825 logo prominently displayed
- Construction-themed styling
- Union-focused messaging

#### Chat Interface
- Construction-themed welcome messages
- Union-specific prompt suggestions
- Local 825 branding throughout

#### Model Selection
- Construction-themed model display names
- Local 825 logo for model avatars
- Union-themed visual elements

### 5. Construction-Themed Prompt Suggestions
Updated default prompt suggestions to be relevant for IUOE Local 825 leadership:

1. **🏗️ Construction Safety** - Review our safety protocols
2. **⚡ Electrical Engineering** - Project planning assistance
3. **🤝 Collective Bargaining** - Contract negotiation support
4. **📊 Project Management** - Timeline and resource planning
5. **🔧 Equipment Maintenance** - Preventive maintenance schedule
6. **📋 Union Leadership** - Member communication strategies

### 6. Custom CSS Theme
Created `construction-theme.css` with:
- Union color variables
- Construction-themed button styles
- Union-themed card designs
- Construction animations
- Responsive design elements

### 7. New Components
- **ConstructionWelcome.svelte**: Dedicated welcome component for Local 825 users
- Enhanced branding throughout existing components
- Union-focused messaging and imagery

## Technical Implementation

### Files Modified
1. `src/lib/constants.ts` - App name and construction model names
2. `package.json` - Package name update
3. `src/app.html` - HTML title, meta tags, and favicon
4. `src/routes/+layout.svelte` - Layout branding updates
5. `src/lib/components/chat/ModelSelector/ModelItem.svelte` - Model display names
6. `src/routes/auth/+page.svelte` - Authentication page branding
7. `src/lib/components/chat/ChatPlaceholder.svelte` - Chat interface branding
8. `backend/open_webui/config.py` - Default prompt suggestions
9. `src/app.css` - Construction theme import
10. `src/lib/utils/index.ts` - Construction model name utility

### Files Created
1. `src/construction-theme.css` - Custom construction styling
2. `src/lib/components/ConstructionWelcome.svelte` - Welcome component
3. `IUOE_LOCAL_825_BRANDING.md` - This documentation

## Usage Instructions

### For Users
1. **Login**: Use existing authentication system with Local 825 branding
2. **Model Selection**: Choose from construction-themed model names
3. **Chat Interface**: Experience union-focused AI assistance
4. **Prompt Suggestions**: Use construction and union-specific suggestions

### For Developers
1. **Adding New Models**: Update `CONSTRUCTION_MODEL_NAMES` in constants
2. **Styling**: Use CSS variables from `construction-theme.css`
3. **Branding**: Follow established patterns for Local 825 integration

## Future Enhancements

### Potential Additions
1. **Union-Specific AI Prompts**: Pre-built prompts for common union tasks
2. **Construction Project Templates**: AI-assisted project planning
3. **Safety Protocol Assistant**: AI-powered safety guidance
4. **Collective Bargaining Support**: Contract analysis and negotiation help
5. **Equipment Maintenance AI**: Predictive maintenance assistance

### Integration Opportunities
1. **IUOE Local 825 Systems**: Connect with existing union databases
2. **Project Management Tools**: Integrate with construction software
3. **Safety Management**: Connect with OSHA and safety systems
4. **Training Programs**: AI-assisted union member training

## Maintenance

### Regular Updates
- Monitor for new AI model releases and add construction names
- Update Local 825 branding as needed
- Maintain construction theme consistency
- Review and update prompt suggestions

### Brand Compliance
- Ensure all branding follows IUOE Local 825 guidelines
- Maintain professional construction industry appearance
- Keep union messaging current and relevant

## Support

For technical support or branding questions related to the Bulldozer™ application, please contact the IUOE Local 825 IT team or the development team.

---

**Bulldozer™** - Empowering IUOE Local 825 Leadership with AI-Powered Construction Intelligence

*Built with union pride for construction excellence*
