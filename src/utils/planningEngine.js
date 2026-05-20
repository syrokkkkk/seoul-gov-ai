export function analyzeInfrastructure(
  type,
  zones,
  params
) {

  const analyzed = zones.map((zone) => {

    let score =
      100
      - zone.pollution * 0.35
      - zone.traffic * 0.25
      + zone.airflow * 0.3
      + zone.greenIndex * 0.2
      - zone.populationRisk * 0.15;

    score -= params.energy * 0.02;

    score -= params.visitors / 5000;

    score += params.greenCoverage * 0.4;

    score -= params.trafficTolerance * 0.15;

    score += Math.random() * 12;

    score = Math.max(
      1,
      Math.min(
        100,
        Math.round(score)
      )
    );

    return {
      ...zone,
      score,
    };

  });

  analyzed.sort((a, b) => b.score - a.score);

  return {
    best: analyzed[0],
    worst: analyzed[analyzed.length - 1],
    all: analyzed,
  };

}