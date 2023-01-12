import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
  {
    title: '　　余生平寡嗜好，凡饮酒、度曲、摴蒲，可以接群居之欢者，一无能焉，文史外无以自娱，乃广采游心骇耳之事，妄言妄听，记而存之，非有所惑也。',
    Svg: require('@site/static/img/flag-red-blue.svg').default,
    description: (
      <>
        ——清·袁枚《子不语·自序》
      </>
    ),
  },
  // {
  //   title: '万能牙医',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       假装这个是《万能牙医》的简介：
  //       <br/>
  //       德鲁伊和萨满的爱恨纠葛
  //       <br/>
  //       还有四象神兽跟魔法师的乱入
  //     </>
  //   ),
  // }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

      <div className="text--left">
        <big>{title}</big>
      </div>

      <div className="text--right padding-horiz--md">
        <br></br>
        <big>{description}</big>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
