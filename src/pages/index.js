
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
 
const PAPER_URL = '/paper/durability-heuristics';
 
const takeaways = [
  'Claims that survive replication tend to be constraint-anchored — they name a mechanism, rule out an alternative, state a boundary, and give a falsifier — rather than novelty-anchored around effect size alone.',
  'Scoring twelve well-known cases retrospectively on a simple four-item heuristic predicts, better than early citation counts do, which claims are still cited as mechanism a decade or more later.',
  'The practical upshot for authors and reviewers: spend one sentence on what would prove a finding wrong. It is cheap to write and appears to carry more long-run rhetorical weight than the headline effect size.',
];
 
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.page}>
        <p className={styles.kicker}>Working Paper No. 14 · Applied Research Series</p>
 
        <Link to={PAPER_URL} className={styles.titleLink}>
          <h1 className={styles.title}>
            Constraint, Not Novelty: A Heuristic for Judging Which Empirical
            Claims Survive Replication
          </h1>
        </Link>
 
        <div className="byline">
          <span>
            <strong>J. A. Rutherford</strong>
            <br />
            Center for Methods &amp; Evidence (demo affiliation)
          </span>
          <span>
            <strong>S. K. Odom</strong>
            <br />
            Department of Inquiry Studies (demo affiliation)
          </span>
        </div>
        <p>
          September 2026 &nbsp;·&nbsp; Revised draft &nbsp;·&nbsp; v1.2 &nbsp;·&nbsp; 12 min read
        </p>
 
        <div className={styles.takeaways}>
          <p className={styles.takeawaysLabel}>Key takeaways</p>
          <ul>
            {takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
 
        <Link to={PAPER_URL} className={styles.readMore}>
          Read the full working paper →
        </Link>
      </main>
    </Layout>
  );
}
