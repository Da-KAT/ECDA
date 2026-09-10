import { notFound } from "next/navigation";
import membersData from "@/data/members.json";
import styles from "./member.module.css";

type Garage = {
  id: number;
  name: string;
  description: string;
  image: string;
  mapsUrl: string;
};

type Member = {
  slug: string;
  name: string;
  role: string;
  membershipId: string;
  photo: string;
  garages: Garage[];
};

export async function generateStaticParams() {
  return membersData.map((m: Member) => ({ slug: m.slug }));
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = membersData.find((m: Member) => m.slug === slug) as Member | undefined;

  if (!member) return notFound();

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <header className={styles.topBar}>
        <div className={styles.logoArea}>
          {/* Replace with <Image> of actual logo */}
          <div className={styles.logoPlaceholder}>GCA</div>
          <span className={styles.assocName}>Ghana Car Dealers Association</span>
        </div>
      </header>

      {/* Member card */}
      <section className={styles.memberCard}>
        <div className={styles.memberPhotoWrap}>
          {/* Replace src with member.photo once real images are added */}
          <div className={styles.memberPhotoPlaceholder} />
        </div>
        <div className={styles.memberInfo}>
          <h1 className={styles.memberName}>{member.name}</h1>
          <span className={styles.memberRole}>{member.role}</span>
          <span className={styles.memberId}>ID: {member.membershipId}</span>
        </div>
      </section>

      {/* Garages section */}
      <section className={styles.garagesSection}>
        <h2 className={styles.garagesHeading}>Garages</h2>
        <div className={styles.garageGrid}>
          {member.garages.map((garage) => (
            <div key={garage.id} className={styles.garageTile}>
              {/* Garage image — top ~70% */}
              <div className={styles.garageImageWrap}>
                <div className={styles.garageImagePlaceholder} />
              </div>

              {/* Info strip — bottom ~30% */}
              <div className={styles.garageInfo}>
                <div className={styles.garageText}>
                  <p className={styles.garageName}>{garage.name}</p>
                  <p className={styles.garageDesc}>{garage.description}</p>
                </div>
                <a
                  href={garage.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapsBtn}
                >
                  📍 Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
