/**
 * Created by azlar on 21/08/2017.
 */

export const validCoord = (x) => {
    return Number(x) % 1 !== 0 && x > 0 && x < 1;
};