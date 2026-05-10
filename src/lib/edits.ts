export type Edit = {
  slug: string;
  title: string;
  eyebrow: string;
  blurb: string;
  curatorNote: string;
  pieceCount: number;
  imagePath: string;
  /** Optional YouTube video ID; if set, the thumbnail is used as the card image. */
  youtubeVideoId?: string;
};

export const edits: Edit[] = [
  {
    slug: "weekend-in-lisbon",
    title: "Weekend in Lisbon",
    eyebrow: "Travel · Warm Climate",
    blurb:
      "Linen that breathes, leather that softens, one thing you'd never pack but always wear.",
    curatorNote:
      "Built for cobblestone and cafés. Don't iron the linen — that's the point.",
    pieceCount: 7,
    imagePath: "/images/edits/weekend-in-lisbon.jpg",
    youtubeVideoId: "PwHQZ7rOV9Y",
  },
  {
    slug: "first-day-back",
    title: "First Day Back",
    eyebrow: "Workwear · Reentry",
    blurb:
      "For the morning the calendar fills again. Confidence without costume.",
    curatorNote:
      "Tailoring you forget you're wearing. The kind that earns the room.",
    pieceCount: 6,
    imagePath: "/images/edits/first-day-back.jpg",
    youtubeVideoId: "9FMXlPDTHbA",
  },
  {
    slug: "black-tie-personal",
    title: "Black-Tie, Personal",
    eyebrow: "Evening · Occasion",
    blurb:
      "Not the dress everyone has. The one one woman in the room is wearing.",
    curatorNote:
      "Black-tie should feel like you. If it doesn't, we picked the wrong piece.",
    pieceCount: 5,
    imagePath: "/images/edits/black-tie-personal.jpg",
    youtubeVideoId: "2zcde9sdVFA",
  },
  {
    slug: "off-duty",
    title: "Off-Duty",
    eyebrow: "Everyday · Quiet",
    blurb:
      "The wardrobe of someone who doesn't have to try. Built piece by piece.",
    curatorNote:
      "The hardest edit to assemble. Easy clothes are surprisingly difficult to find.",
    pieceCount: 8,
    imagePath: "/images/edits/off-duty.jpg",
    youtubeVideoId: "wecBnE_xYKk",
  },
];

export function getFeaturedEdit(): Edit {
  return edits[0];
}
