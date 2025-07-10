// toastService.ts
import { Toast } from 'primereact/toast';

let toastRef: React.RefObject<Toast> | null = null;

export const setToastRef = (ref: React.RefObject<Toast>) => {
  toastRef = ref;
};

export const showToast = (options: {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary?: string;
  detail?: string;
  life?: number;
}) => {
  toastRef?.current?.show(options);
};
