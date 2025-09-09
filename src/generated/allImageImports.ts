// Автоматически сгенерировано
export const certificatesImages = import.meta.glob(
  "../assets/pictures/certificates/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const rootImages = import.meta.glob(
  "../assets/pictures/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_ColdFountainsHeartsImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/ColdFountainsHearts/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_ColoredSmokeImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/ColoredSmoke/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_DragonImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/Dragon/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_FirstDanceImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/FirstDance/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_GoldenDreamImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/GoldenDream/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_HeavySmokeImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/HeavySmoke/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_PyroPostcards_PyroInstallationsImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/PyroPostcards/PyroInstallations/*.{jpg,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_PyroPostcards_PyroLettersAndNumbersImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/PyroPostcards/PyroLettersAndNumbers/*.{jpg,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_PyroPostcards_PyroPostcardsImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/PyroPostcards/PyroPostcards/*.{jpg,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_RussianFaityTalesImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/RussianFaityTales/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_RussianFlexImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/RussianFlex/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_SparkleNightImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/SparkleNight/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_TeslaShowAndInteractive_InteractiveImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/TeslaShowAndInteractive/Interactive/*.{jpg,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_TeslaShowAndInteractive_TeslaShowImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/TeslaShowAndInteractive/TeslaShow/*.{jpg,jpeg,png,webp,gif}",
    {eager: true}
  );
export const genderPartyImages = import.meta.glob(
  "../assets/pictures/genderParty/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const iceDartsImages = import.meta.glob(
  "../assets/pictures/iceDarts/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const mirrorLaserShowImages = import.meta.glob(
  "../assets/pictures/mirrorLaserShow/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const welcome_angelImages = import.meta.glob(
  "../assets/pictures/welcome/angel/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);
export const welcome_MirrorImages = import.meta.glob(
  "../assets/pictures/welcome/Mirror/*.{jpg,jpeg,png,webp,gif}",
  {eager: true}
);

export const allImages = {
  ...firePyrotechnicShow_ColoredSmokeImages,
  ...firePyrotechnicShow_DragonImages,
  ...firePyrotechnicShow_FirstDanceImages,
  ...firePyrotechnicShow_GoldenDreamImages,
  ...firePyrotechnicShow_HeavySmokeImages,
  ...firePyrotechnicShow_PyroPostcards_PyroInstallationsImages,
  ...firePyrotechnicShow_PyroPostcards_PyroLettersAndNumbersImages,
  ...firePyrotechnicShow_PyroPostcards_PyroPostcardsImages,
  ...firePyrotechnicShow_RussianFaityTalesImages,
  ...firePyrotechnicShow_RussianFlexImages,
  ...firePyrotechnicShow_SparkleNightImages,
  ...firePyrotechnicShow_TeslaShowAndInteractive_InteractiveImages,
  ...firePyrotechnicShow_TeslaShowAndInteractive_TeslaShowImages,
  ...genderPartyImages,
  ...iceDartsImages,
  ...mirrorLaserShowImages,
  ...welcome_angelImages,
  ...welcome_MirrorImages,
  ...certificatesImages,
  ...rootImages,
  ...firePyrotechnicShow_ColdFountainsHeartsImages,
};

export const getImageUrl = (path: string): string => {
  console.log(firePyrotechnicShow_RussianFlexImages);
  return (allImages[path] as {default: string})?.default || "777";
};
