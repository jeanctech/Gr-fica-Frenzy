import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

//Todo https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});