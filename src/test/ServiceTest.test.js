import { getStarshipsByPageandSearchText, getStarship } from '../service/service.js';
import axios from "axios";
import { expect, jest } from "@jest/globals";

jest.mock("axios");

describe("Starship List", () => {

    it("should return starships by filter:none and page:4 ", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve({
                data: {
                    "count": 36,
                    "next": true,
                    "previous": "https://swapi.dev/api/starships/?search=&page=3",
                    "results": [
                        {
                            "name": "Naboo star skiff",
                            "model": "J-type star skiff",
                            "hyperdrive_rating": '0.5'
                        }
                    ]
                }
            })
        });

        const data = await getStarshipsByPageandSearchText(4, "")

        expect(data).toMatchObject({
            starships: [
                {
                    name: 'Naboo star skiff',
                    model: 'J-type star skiff',
                    hyperdrive_rating: '0.5'
                }
            ],
            pageInfo: true
        })

    })

    it("should return starships by filter:star and page:1 ", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve({
                data: {
                    "count": 15,
                    "next": true,
                    "previous": null,
                    "results":
                    {
                        "name": "Star Destroyer",
                        "model": "Imperial I-class Star Destroyer",
                    }
                }
            })
        });

        const data = await getStarshipsByPageandSearchText(1, "star")

        expect(data).toMatchObject({
            starships: {
                "name": "Star Destroyer",
                "model": "Imperial I-class Star Destroyer"
            },
            "pageInfo": true
        })

    })

    it("should return {} when there's an error", async () => {
        axios.get.mockImplementation(() => {
            return Promise.reject({
                data: [],
            });
        });

        const data = await getStarshipsByPageandSearchText();

        expect(data).toEqual({});
    });
})

describe("Single Starship with Details", () => {
    it("should return single starship", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve({
                data: {
                    "name": "Naboo star skiff", 
                    "model": "J-type star skiff", 
                    "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated", 
                    "max_atmosphering_speed": "1050", 
                    "crew": "3", 
                    "passengers": "3", 
                    "cargo_capacity": "unknown", 
                    "hyperdrive_rating": "0.5", 
                }
            })
        });

        const data = await getStarship(64)

        expect(data).toEqual(
            {
                name: 'Naboo star skiff',
                model: 'J-type star skiff',
                manufacturer: 'Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated',
                max_atmosphering_speed: '1050',
                crew: '3',
                passengers: '3',
                cargo_capacity: 'unknown',
                hyperdrive_rating: '0.5',
            }
        )
    })

    it("should return null when there's an error", async () => {
        axios.get.mockImplementation(() => {
            return Promise.reject({
                data: [],
            });
        });

        const data = await getStarship();

        expect(data).toEqual({});
    });
})