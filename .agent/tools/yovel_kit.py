import os
import subprocess
from typing import Optional
from agno.tools import Toolkit

class YovelKitTools(Toolkit):
    def __init__(self):
        super().__init__(name="yovel_kit_tools")
        self.register(self.run_security_scan)
        self.register(self.run_performance_audit)
        self.register(self.run_seo_check)
        self.register(self.run_ux_audit)
        self.register(self.run_project_checklist)

    def _run_script(self, script_path: str, args: Optional[str] = None) -> str:
        """Helper to run a python script and return output."""
        if not os.path.exists(script_path):
            return f"Error: Script {script_path} not found."
        
        cmd = ["python", script_path]
        if args:
            cmd.extend(args.split())
            
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=False)
            return f"STDOUT:\n{result.stdout}\nSTDERR:\n{result.stderr}"
        except Exception as e:
            return f"Execution failed: {str(e)}"

    def run_security_scan(self) -> str:
        """Runs the security vulnerability scan on the project.
        Use this before any deployment or after adding new dependencies.
        """
        return self._run_script(".agent/skills/vulnerability-scanner/scripts/security_scan.py")

    def run_performance_audit(self) -> str:
        """Runs the Lighthouse performance audit to check LCP, FID, and CLS.
        Use this after UI changes to ensure performance remains high.
        """
        return self._run_script(".agent/skills/performance-profiling/scripts/lighthouse_audit.py")

    def run_seo_check(self) -> str:
        """Checks SEO metadata, tags, and structure according to project standards."""
        return self._run_script(".agent/skills/seo-fundamentals/scripts/seo_checker.py")

    def run_ux_audit(self) -> str:
        """Runs an automated UX/Accessibility audit on the current components."""
        return self._run_script(".agent/skills/frontend-design/scripts/ux_audit.py")

    def run_project_checklist(self) -> str:
        """Runs the final project checklist to verify all standards are met.
        This is the ultimate 'Ready for Production' check.
        """
        return self._run_script(".agent/scripts/checklist.py")