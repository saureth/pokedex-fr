export function CalculateRelatedById(relatedId: number = 0) {
    const PKM_COUNT = 1292;
    const randomize = function(baseId: number): number {
        return +(baseId * Math.random() * 100 % PKM_COUNT).toFixed(0);
    }
    let relatedIds = {
        one: randomize(relatedId),
        two: randomize(relatedId * 2),
        three: randomize(relatedId / 2),
        four: randomize(relatedId),
    }
    return relatedIds;
}