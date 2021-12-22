export const convertActorToFormData = (actor) => {
  const formData = {};
  formData["name"] = actor.name;
  if (actor.biography) formData["biography"] = actor.biography;
  if (actor.dateOfBirth) formData["dateOfBirth"] = formatDate(actor.dateOfBirth);
  if (actor.picture) formData["picture"] = actor.picture;

  return formData;
};

const formatDate = (date) => {
  date = new Date(date);
  const format = new Intl.DateTimeFormat("en", { year: "numeric", month: "2-digit", day: "2-digit" });
  const [{ value: month }, , { value: day }, , { value: year }] = format.formatToParts(date);
  return `${year}-${month}-${day}`;
};
