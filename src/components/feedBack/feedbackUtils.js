import { feedbackTemplate } from "./feedbackTemplates.js";
export function addFeedback(event, site) {
  const background = event.target.background.value || "feedbackBackgroundBlue";
  const font = event.target.font.value || "feedbackFontNunito";
  const classes = background + " " + font;
  site.insertAdjacentHTML("beforeend", feedbackTemplate(classes));
}
