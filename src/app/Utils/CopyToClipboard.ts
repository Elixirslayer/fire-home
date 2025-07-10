import { showToast } from "../services/ToastService";

export function copyToClipboard(value: string) {
  if (window?.navigator?.clipboard) {
    window.navigator.clipboard.writeText(value);
    showToast({
      severity: "success",
      summary: "Copied",
      detail: "Copied to clipboard!",
      life: 3000
    })
  }
}