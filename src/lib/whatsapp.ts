import { site } from '../config/site';

/** Enlace wa.me con mensaje prellenado (URL-encoded). */
export function waLink(message: string = site.whatsapp.generalMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
