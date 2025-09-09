// Автоматически сгенерировано
export const certificatesImages = import.meta.glob(
  "../assets/pictures/certificates/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const rootImages = import.meta.glob(
  "../assets/pictures/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_ColdFountainsHeartsImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/ColdFountainsHearts/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_ColoredSmokeImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/ColoredSmoke/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_DragonImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/Dragon/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_FirstDanceImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/FirstDance/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_GoldenDreamImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/GoldenDream/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_HeavySmokeImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/HeavySmoke/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_PyroPostcards_PyroInstallationsImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/PyroPostcards/PyroInstallations/*.{jpg,JPG,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_PyroPostcards_PyroLettersAndNumbersImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/PyroPostcards/PyroLettersAndNumbers/*.{jpg,JPG,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_PyroPostcards_PyroPostcardsImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/PyroPostcards/PyroPostcards/*.{jpg,JPG,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_RussianFaityTalesImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/RussianFaityTales/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_RussianFlexImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/RussianFlex/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_SparkleNightImages = import.meta.glob(
  "../assets/pictures/firePyrotechnicShow/SparkleNight/*.{jpg,JPG,jpeg,JPG,png,webp,gif}",
  {eager: true}
);
export const firePyrotechnicShow_TeslaShowAndInteractive_InteractiveImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/TeslaShowAndInteractive/Interactive/*.{jpg,JPG,jpeg,png,webp,gif}",
    {eager: true}
  );
export const firePyrotechnicShow_TeslaShowAndInteractive_TeslaShowImages =
  import.meta.glob(
    "../assets/pictures/firePyrotechnicShow/TeslaShowAndInteractive/TeslaShow/*.{jpg,JPG,jpeg,png,webp,gif}",
    {eager: true}
  );
export const genderPartyImages = import.meta.glob(
  "../assets/pictures/genderParty/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const iceDartsImages = import.meta.glob(
  "../assets/pictures/iceDarts/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const mirrorLaserShowImages = import.meta.glob(
  "../assets/pictures/mirrorLaserShow/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const welcome_angelImages = import.meta.glob(
  "../assets/pictures/welcome/angel/*.{jpg,JPG,jpeg,png,webp,gif}",
  {eager: true}
);
export const welcome_MirrorImages = import.meta.glob(
  "../assets/pictures/welcome/Mirror/*.{jpg,JPG,jpeg,png,webp,gif}",
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
  console.log(firePyrotechnicShow_SparkleNightImages);
  return (allImages[path] as {default: string})?.default || "777";
};
