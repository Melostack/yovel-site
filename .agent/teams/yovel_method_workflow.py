import os
import json
from pathlib import Path
from dotenv import load_dotenv
from agno.agent import Agent
from agno.models.google import Gemini
from agno.tools.file import FileTools

# Load environment variables
load_dotenv()

# Configuration
API_KEY = os.getenv("GEMINI_API_KEY")
model = Gemini(id="gemini-2.5-flash-lite", api_key=API_KEY)

# Define Agents
ui_ux_specialist = Agent(
    name="UI/UX Specialist",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Luxury Tech UI/UX Expert. Inspiration: Meraas.",
    instructions=[
        "Sua primeira tarefa é criar o arquivo src/theme/design_tokens.json.",
        "Baseie-se na análise do site Meraas para definir opacidades de glassmorphism e timings de animação.",
        "O foco é sutileza: nada de cores vibrantes demais ou animações frenéticas. O luxo é calmo.",
        "Use exactly the structure provided in the requirements (theme, tokens, colors, effects, spacing, animations)."
    ],
    markdown=True
)

frontend_engineer = Agent(
    name="Frontend Engineer",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Expert React Developer using Framer Motion and Tailwind.",
    instructions=[
        "Refactor src/components/ui/BentoGrid.tsx to import designTokens from '@/theme/design_tokens.json'.",
        "Implement src/components/sections/Method.tsx using the refactored BentoGrid.",
        "Você está proibido de usar valores 'hardcoded' no CSS/Tailwind para os cartões do Bento Grid.",
        "Para animações com Framer Motion, use o stagger_delay do JSON para o staggerChildren no componente pai.",
        "Use '@/theme/design_tokens.json' import alias."
    ],
    markdown=True
)

security_auditor = Agent(
    name="Security Auditor",
    model=model,
    tools=[FileTools(base_dir=Path("."))],
    description="Security and Performance Auditor",
    instructions=[
        "Verify if images in Method.tsx are using WebP format.",
        "Check if the new implementations maintain LCP < 1.6s (theoretical check)."
    ],
    markdown=True
)

# Orchestrator
def run_workflow():
    print("🚀 Starting Meraas Luxury Tech Refinement...\n")
    
    # 1. Generate Design Tokens
    print("🎨 UI/UX Specialist: Generating Design Tokens...")
    ui_ux_specialist.print_response(
        "Generate src/theme/design_tokens.json with the provided Luxury Dark theme structure.", 
        stream=True
    )
    
    # 2. Refactor BentoGrid & Implement Method
    print("\n🏗️ Frontend Engineer: Implementing Components...")
    frontend_engineer.print_response(
        "1. Refactor src/components/ui/BentoGrid.tsx to use design tokens.\n"
        "2. Implement src/components/sections/Method.tsx using BentoGrid and tokens.\n"
        "Refer to src/theme/design_tokens.json for values.",
        stream=True
    )
    
    # 3. Audit
    print("\n🔒 Security Auditor: Verifying...")
    security_auditor.print_response("Verify WebP usage in the new Method.tsx.", stream=True)

    print("\n✅ Workflow Complete.")

if __name__ == "__main__":
    run_workflow()
