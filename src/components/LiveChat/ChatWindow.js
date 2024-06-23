import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { GoPaperAirplane } from "react-icons/go";

const ChatWindow = () => {
  let currIndex = 0;
  const limit = 100;

  const data = [
    {
      name: "John Doe",
      imageUrl: "https://picsum.photos/200/300?random=1",
      comment: "This is a great picture!",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://picsum.photos/200/300?random=2",
      comment: "Absolutely stunning!",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://picsum.photos/200/300?random=3",
      comment: "I love this view!",
    },
    {
      name: "Bob Brown",
      imageUrl: "https://picsum.photos/200/300?random=4",
      comment: "Amazing shot!",
    },
    {
      name: "User 5",
      imageUrl: "https://picsum.photos/200/300?random=5",
      comment: "This is a comment from User 5.",
    },
    {
      name: "User 6",
      imageUrl: "https://picsum.photos/200/300?random=6",
      comment: "This is a comment from User 6.",
    },
    {
      name: "User 7",
      imageUrl: "https://picsum.photos/200/300?random=7",
      comment: "This is a comment from User 7.",
    },
    {
      name: "User 8",
      imageUrl: "https://picsum.photos/200/300?random=8",
      comment: "This is a comment from User 8.",
    },
    {
      name: "User 9",
      imageUrl: "https://picsum.photos/200/300?random=9",
      comment: "This is a comment from User 9.",
    },
    {
      name: "User 10",
      imageUrl: "https://picsum.photos/200/300?random=10",
      comment: "This is a comment from User 10.",
    },
    {
      name: "User 11",
      imageUrl: "https://picsum.photos/200/300?random=11",
      comment: "This is a comment from User 11.",
    },
    {
      name: "User 12",
      imageUrl: "https://picsum.photos/200/300?random=12",
      comment: "This is a comment from User 12.",
    },
    {
      name: "User 13",
      imageUrl: "https://picsum.photos/200/300?random=13",
      comment: "This is a comment from User 13.",
    },
    {
      name: "User 14",
      imageUrl: "https://picsum.photos/200/300?random=14",
      comment: "This is a comment from User 14.",
    },
    {
      name: "User 15",
      imageUrl: "https://picsum.photos/200/300?random=15",
      comment: "This is a comment from User 15.",
    },
    {
      name: "User 16",
      imageUrl: "https://picsum.photos/200/300?random=16",
      comment: "This is a comment from User 16.",
    },
    {
      name: "User 17",
      imageUrl: "https://picsum.photos/200/300?random=17",
      comment: "This is a comment from User 17.",
    },
    {
      name: "User 18",
      imageUrl: "https://picsum.photos/200/300?random=18",
      comment: "This is a comment from User 18.",
    },
    {
      name: "User 19",
      imageUrl: "https://picsum.photos/200/300?random=19",
      comment: "This is a comment from User 19.",
    },
    {
      name: "User 20",
      imageUrl: "https://picsum.photos/200/300?random=20",
      comment: "This is a comment from User 20.",
    },
    {
      name: "User 21",
      imageUrl: "https://picsum.photos/200/300?random=21",
      comment: "This is a comment from User 21.",
    },
    {
      name: "User 22",
      imageUrl: "https://picsum.photos/200/300?random=22",
      comment: "This is a comment from User 22.",
    },
    {
      name: "User 23",
      imageUrl: "https://picsum.photos/200/300?random=23",
      comment: "This is a comment from User 23.",
    },
    {
      name: "User 24",
      imageUrl: "https://picsum.photos/200/300?random=24",
      comment: "This is a comment from User 24.",
    },
    {
      name: "User 25",
      imageUrl: "https://picsum.photos/200/300?random=25",
      comment: "This is a comment from User 25.",
    },
    {
      name: "User 26",
      imageUrl: "https://picsum.photos/200/300?random=26",
      comment: "This is a comment from User 26.",
    },
    {
      name: "User 27",
      imageUrl: "https://picsum.photos/200/300?random=27",
      comment: "This is a comment from User 27.",
    },
    {
      name: "User 28",
      imageUrl: "https://picsum.photos/200/300?random=28",
      comment: "This is a comment from User 28.",
    },
    {
      name: "User 29",
      imageUrl: "https://picsum.photos/200/300?random=29",
      comment: "This is a comment from User 29.",
    },
    {
      name: "User 30",
      imageUrl: "https://picsum.photos/200/300?random=30",
      comment: "This is a comment from User 30.",
    },
    {
      name: "User 31",
      imageUrl: "https://picsum.photos/200/300?random=31",
      comment: "This is a comment from User 31.",
    },
    {
      name: "User 32",
      imageUrl: "https://picsum.photos/200/300?random=32",
      comment: "This is a comment from User 32.",
    },
    {
      name: "User 33",
      imageUrl: "https://picsum.photos/200/300?random=33",
      comment: "This is a comment from User 33.",
    },
    {
      name: "User 34",
      imageUrl: "https://picsum.photos/200/300?random=34",
      comment: "This is a comment from User 34.",
    },
    {
      name: "User 35",
      imageUrl: "https://picsum.photos/200/300?random=35",
      comment: "This is a comment from User 35.",
    },
    {
      name: "User 36",
      imageUrl: "https://picsum.photos/200/300?random=36",
      comment: "This is a comment from User 36.",
    },
    {
      name: "User 37",
      imageUrl: "https://picsum.photos/200/300?random=37",
      comment: "This is a comment from User 37.",
    },
    {
      name: "User 38",
      imageUrl: "https://picsum.photos/200/300?random=38",
      comment: "This is a comment from User 38.",
    },
    {
      name: "User 39",
      imageUrl: "https://picsum.photos/200/300?random=39",
      comment: "This is a comment from User 39.",
    },
    {
      name: "User 40",
      imageUrl: "https://picsum.photos/200/300?random=40",
      comment: "This is a comment from User 40.",
    },
    {
      name: "User 41",
      imageUrl: "https://picsum.photos/200/300?random=41",
      comment: "This is a comment from User 41.",
    },
    {
      name: "User 42",
      imageUrl: "https://picsum.photos/200/300?random=42",
      comment: "This is a comment from User 42.",
    },
    {
      name: "User 43",
      imageUrl: "https://picsum.photos/200/300?random=43",
      comment: "This is a comment from User 43.",
    },
    {
      name: "User 44",
      imageUrl: "https://picsum.photos/200/300?random=44",
      comment: "This is a comment from User 44.",
    },
    {
      name: "User 45",
      imageUrl: "https://picsum.photos/200/300?random=45",
      comment: "This is a comment from User 45.",
    },
    {
      name: "User 46",
      imageUrl: "https://picsum.photos/200/300?random=46",
      comment: "This is a comment from User 46.",
    },
    {
      name: "User 47",
      imageUrl: "https://picsum.photos/200/300?random=47",
      comment: "This is a comment from User 47.",
    },
    {
      name: "User 48",
      imageUrl: "https://picsum.photos/200/300?random=48",
      comment: "This is a comment from User 48.",
    },
    {
      name: "User 49",
      imageUrl: "https://picsum.photos/200/300?random=49",
      comment: "This is a comment from User 49.",
    },
    {
      name: "User 50",
      imageUrl: "https://picsum.photos/200/300?random=50",
      comment: "This is a comment from User 50.",
    },
    {
      name: "User 51",
      imageUrl: "https://picsum.photos/200/300?random=51",
      comment: "This is a comment from User 51.",
    },
    {
      name: "User 52",
      imageUrl: "https://picsum.photos/200/300?random=52",
      comment: "This is a comment from User 52.",
    },
    {
      name: "User 53",
      imageUrl: "https://picsum.photos/200/300?random=53",
      comment: "This is a comment from User 53.",
    },
    {
      name: "User 54",
      imageUrl: "https://picsum.photos/200/300?random=54",
      comment: "This is a comment from User 54.",
    },
    {
      name: "User 55",
      imageUrl: "https://picsum.photos/200/300?random=55",
      comment: "This is a comment from User 55.",
    },
    {
      name: "User 56",
      imageUrl: "https://picsum.photos/200/300?random=56",
      comment: "This is a comment from User 56.",
    },
    {
      name: "User 57",
      imageUrl: "https://picsum.photos/200/300?random=57",
      comment: "This is a comment from User 57.",
    },
    {
      name: "User 58",
      imageUrl: "https://picsum.photos/200/300?random=58",
      comment: "This is a comment from User 58.",
    },
    {
      name: "User 59",
      imageUrl: "https://picsum.photos/200/300?random=59",
      comment: "This is a comment from User 59.",
    },
    {
      name: "User 60",
      imageUrl: "https://picsum.photos/200/300?random=60",
      comment: "This is a comment from User 60.",
    },
    {
      name: "User 61",
      imageUrl: "https://picsum.photos/200/300?random=61",
      comment: "This is a comment from User 61.",
    },
    {
      name: "User 62",
      imageUrl: "https://picsum.photos/200/300?random=62",
      comment: "This is a comment from User 62.",
    },
    {
      name: "User 63",
      imageUrl: "https://picsum.photos/200/300?random=63",
      comment: "This is a comment from User 63.",
    },
    {
      name: "User 64",
      imageUrl: "https://picsum.photos/200/300?random=64",
      comment: "This is a comment from User 64.",
    },
    {
      name: "User 65",
      imageUrl: "https://picsum.photos/200/300?random=65",
      comment: "This is a comment from User 65.",
    },
    {
      name: "User 66",
      imageUrl: "https://picsum.photos/200/300?random=66",
      comment: "This is a comment from User 66.",
    },
    {
      name: "User 67",
      imageUrl: "https://picsum.photos/200/300?random=67",
      comment: "This is a comment from User 67.",
    },
    {
      name: "User 68",
      imageUrl: "https://picsum.photos/200/300?random=68",
      comment: "This is a comment from User 68.",
    },
    {
      name: "User 69",
      imageUrl: "https://picsum.photos/200/300?random=69",
      comment: "This is a comment from User 69.",
    },
    {
      name: "User 70",
      imageUrl: "https://picsum.photos/200/300?random=70",
      comment: "This is a comment from User 70.",
    },
    {
      name: "User 71",
      imageUrl: "https://picsum.photos/200/300?random=71",
      comment: "This is a comment from User 71.",
    },
    {
      name: "User 72",
      imageUrl: "https://picsum.photos/200/300?random=72",
      comment: "This is a comment from User 72.",
    },
    {
      name: "User 73",
      imageUrl: "https://picsum.photos/200/300?random=73",
      comment: "This is a comment from User 73.",
    },
    {
      name: "User 74",
      imageUrl: "https://picsum.photos/200/300?random=74",
      comment: "This is a comment from User 74.",
    },
    {
      name: "User 75",
      imageUrl: "https://picsum.photos/200/300?random=75",
      comment: "This is a comment from User 75.",
    },
    {
      name: "User 76",
      imageUrl: "https://picsum.photos/200/300?random=76",
      comment: "This is a comment from User 76.",
    },
    {
      name: "User 77",
      imageUrl: "https://picsum.photos/200/300?random=77",
      comment: "This is a comment from User 77.",
    },
    {
      name: "User 78",
      imageUrl: "https://picsum.photos/200/300?random=78",
      comment: "This is a comment from User 78.",
    },
    {
      name: "User 79",
      imageUrl: "https://picsum.photos/200/300?random=79",
      comment: "This is a comment from User 79.",
    },
    {
      name: "User 80",
      imageUrl: "https://picsum.photos/200/300?random=80",
      comment: "This is a comment from User 80.",
    },
    {
      name: "User 81",
      imageUrl: "https://picsum.photos/200/300?random=81",
      comment: "This is a comment from User 81.",
    },
    {
      name: "User 82",
      imageUrl: "https://picsum.photos/200/300?random=82",
      comment: "This is a comment from User 82.",
    },
    {
      name: "User 83",
      imageUrl: "https://picsum.photos/200/300?random=83",
      comment: "This is a comment from User 83.",
    },
    {
      name: "User 84",
      imageUrl: "https://picsum.photos/200/300?random=84",
      comment: "This is a comment from User 84.",
    },
    {
      name: "User 85",
      imageUrl: "https://picsum.photos/200/300?random=85",
      comment: "This is a comment from User 85.",
    },
    {
      name: "User 86",
      imageUrl: "https://picsum.photos/200/300?random=86",
      comment: "This is a comment from User 86.",
    },
    {
      name: "User 87",
      imageUrl: "https://picsum.photos/200/300?random=87",
      comment: "This is a comment from User 87.",
    },
    {
      name: "User 88",
      imageUrl: "https://picsum.photos/200/300?random=88",
      comment: "This is a comment from User 88.",
    },
    {
      name: "User 89",
      imageUrl: "https://picsum.photos/200/300?random=89",
      comment: "This is a comment from User 89.",
    },
    {
      name: "User 90",
      imageUrl: "https://picsum.photos/200/300?random=90",
      comment: "This is a comment from User 90.",
    },
    {
      name: "User 91",
      imageUrl: "https://picsum.photos/200/300?random=91",
      comment: "This is a comment from User 91.",
    },
    {
      name: "User 92",
      imageUrl: "https://picsum.photos/200/300?random=92",
      comment: "This is a comment from User 92.",
    },
    {
      name: "User 93",
      imageUrl: "https://picsum.photos/200/300?random=93",
      comment: "This is a comment from User 93.",
    },
    {
      name: "User 94",
      imageUrl: "https://picsum.photos/200/300?random=94",
      comment: "This is a comment from User 94.",
    },
    {
      name: "User 95",
      imageUrl: "https://picsum.photos/200/300?random=95",
      comment: "This is a comment from User 95.",
    },
    {
      name: "User 96",
      imageUrl: "https://picsum.photos/200/300?random=96",
      comment: "This is a comment from User 96.",
    },
    {
      name: "User 97",
      imageUrl: "https://picsum.photos/200/300?random=97",
      comment: "This is a comment from User 97.",
    },
    {
      name: "User 98",
      imageUrl: "https://picsum.photos/200/300?random=98",
      comment: "This is a comment from User 98.",
    },
    {
      name: "User 99",
      imageUrl: "https://picsum.photos/200/300?random=99",
      comment: "This is a comment from User 99.",
    },
    {
      name: "User 100",
      imageUrl: "https://picsum.photos/200/300?random=100",
      comment: "This is a comment from User 100.",
    },
    {
      name: "User 101",
      imageUrl: "https://picsum.photos/200/300?random=101",
      comment: "This is a comment from User 101.",
    },
    {
      name: "User 102",
      imageUrl: "https://picsum.photos/200/300?random=102",
      comment: "This is a comment from User 102.",
    },
    {
      name: "User 103",
      imageUrl: "https://picsum.photos/200/300?random=103",
      comment: "This is a comment from User 103.",
    },
    {
      name: "User 104",
      imageUrl: "https://picsum.photos/200/300?random=104",
      comment: "This is a comment from User 104.",
    },
    {
      name: "User 105",
      imageUrl: "https://picsum.photos/200/300?random=105",
      comment: "This is a comment from User 105.",
    },
    {
      name: "User 106",
      imageUrl: "https://picsum.photos/200/300?random=106",
      comment: "This is a comment from User 106.",
    },
    {
      name: "User 107",
      imageUrl: "https://picsum.photos/200/300?random=107",
      comment: "This is a comment from User 107.",
    },
    {
      name: "User 108",
      imageUrl: "https://picsum.photos/200/300?random=108",
      comment: "This is a comment from User 108.",
    },
    {
      name: "User 109",
      imageUrl: "https://picsum.photos/200/300?random=109",
      comment: "This is a comment from User 109.",
    },
    {
      name: "User 110",
      imageUrl: "https://picsum.photos/200/300?random=110",
      comment: "This is a comment from User 110.",
    },
    {
      name: "User 111",
      imageUrl: "https://picsum.photos/200/300?random=111",
      comment: "This is a comment from User 111.",
    },
    {
      name: "User 112",
      imageUrl: "https://picsum.photos/200/300?random=112",
      comment: "This is a comment from User 112.",
    },
    {
      name: "User 113",
      imageUrl: "https://picsum.photos/200/300?random=113",
      comment: "This is a comment from User 113.",
    },
    {
      name: "User 114",
      imageUrl: "https://picsum.photos/200/300?random=114",
      comment: "This is a comment from User 114.",
    },
    {
      name: "User 115",
      imageUrl: "https://picsum.photos/200/300?random=115",
      comment: "This is a comment from User 115.",
    },
    {
      name: "User 116",
      imageUrl: "https://picsum.photos/200/300?random=116",
      comment: "This is a comment from User 116.",
    },
    {
      name: "User 117",
      imageUrl: "https://picsum.photos/200/300?random=117",
      comment: "This is a comment from User 117.",
    },
    {
      name: "User 118",
      imageUrl: "https://picsum.photos/200/300?random=118",
      comment: "This is a comment from User 118.",
    },
    {
      name: "User 119",
      imageUrl: "https://picsum.photos/200/300?random=119",
      comment: "This is a comment from User 119.",
    },
    {
      name: "User 120",
      imageUrl: "https://picsum.photos/200/300?random=120",
      comment: "This is a comment from User 120.",
    },
    {
      name: "User 121",
      imageUrl: "https://picsum.photos/200/300?random=121",
      comment: "This is a comment from User 121.",
    },
    {
      name: "User 122",
      imageUrl: "https://picsum.photos/200/300?random=122",
      comment: "This is a comment from User 122.",
    },
    {
      name: "User 123",
      imageUrl: "https://picsum.photos/200/300?random=123",
      comment: "This is a comment from User 123.",
    },
    {
      name: "User 124",
      imageUrl: "https://picsum.photos/200/300?random=124",
      comment: "This is a comment from User 124.",
    },
    {
      name: "User 125",
      imageUrl: "https://picsum.photos/200/300?random=125",
      comment: "This is a comment from User 125.",
    },
    {
      name: "User 126",
      imageUrl: "https://picsum.photos/200/300?random=126",
      comment: "This is a comment from User 126.",
    },
    {
      name: "User 127",
      imageUrl: "https://picsum.photos/200/300?random=127",
      comment: "This is a comment from User 127.",
    },
    {
      name: "User 128",
      imageUrl: "https://picsum.photos/200/300?random=128",
      comment: "This is a comment from User 128.",
    },
    {
      name: "User 129",
      imageUrl: "https://picsum.photos/200/300?random=129",
      comment: "This is a comment from User 129.",
    },
    {
      name: "User 130",
      imageUrl: "https://picsum.photos/200/300?random=130",
      comment: "This is a comment from User 130.",
    },
    {
      name: "User 131",
      imageUrl: "https://picsum.photos/200/300?random=131",
      comment: "This is a comment from User 131.",
    },
    {
      name: "User 132",
      imageUrl: "https://picsum.photos/200/300?random=132",
      comment: "This is a comment from User 132.",
    },
    {
      name: "User 133",
      imageUrl: "https://picsum.photos/200/300?random=133",
      comment: "This is a comment from User 133.",
    },
    {
      name: "User 134",
      imageUrl: "https://picsum.photos/200/300?random=134",
      comment: "This is a comment from User 134.",
    },
    {
      name: "User 135",
      imageUrl: "https://picsum.photos/200/300?random=135",
      comment: "This is a comment from User 135.",
    },
    {
      name: "User 136",
      imageUrl: "https://picsum.photos/200/300?random=136",
      comment: "This is a comment from User 136.",
    },
    {
      name: "User 137",
      imageUrl: "https://picsum.photos/200/300?random=137",
      comment: "This is a comment from User 137.",
    },
    {
      name: "User 138",
      imageUrl: "https://picsum.photos/200/300?random=138",
      comment: "This is a comment from User 138.",
    },
    {
      name: "User 139",
      imageUrl: "https://picsum.photos/200/300?random=139",
      comment: "This is a comment from User 139.",
    },
    {
      name: "User 140",
      imageUrl: "https://picsum.photos/200/300?random=140",
      comment: "This is a comment from User 140.",
    },
    {
      name: "User 141",
      imageUrl: "https://picsum.photos/200/300?random=141",
      comment: "This is a comment from User 141.",
    },
    {
      name: "User 142",
      imageUrl: "https://picsum.photos/200/300?random=142",
      comment: "This is a comment from User 142.",
    },
    {
      name: "User 143",
      imageUrl: "https://picsum.photos/200/300?random=143",
      comment: "This is a comment from User 143.",
    },
    {
      name: "User 144",
      imageUrl: "https://picsum.photos/200/300?random=144",
      comment: "This is a comment from User 144.",
    },
    {
      name: "User 145",
      imageUrl: "https://picsum.photos/200/300?random=145",
      comment: "This is a comment from User 145.",
    },
    {
      name: "User 146",
      imageUrl: "https://picsum.photos/200/300?random=146",
      comment: "This is a comment from User 146.",
    },
    {
      name: "User 147",
      imageUrl: "https://picsum.photos/200/300?random=147",
      comment: "This is a comment from User 147.",
    },
    {
      name: "User 148",
      imageUrl: "https://picsum.photos/200/300?random=148",
      comment: "This is a comment from User 148.",
    },
    {
      name: "User 149",
      imageUrl: "https://picsum.photos/200/300?random=149",
      comment: "This is a comment from User 149.",
    },
    {
      name: "User 150",
      imageUrl: "https://picsum.photos/200/300?random=150",
      comment: "This is a comment from User 150.",
    },
    {
      name: "User 151",
      imageUrl: "https://picsum.photos/200/300?random=151",
      comment: "This is a comment from User 151.",
    },
    {
      name: "User 152",
      imageUrl: "https://picsum.photos/200/300?random=152",
      comment: "This is a comment from User 152.",
    },
    {
      name: "User 153",
      imageUrl: "https://picsum.photos/200/300?random=153",
      comment: "This is a comment from User 153.",
    },
    {
      name: "User 154",
      imageUrl: "https://picsum.photos/200/300?random=154",
      comment: "This is a comment from User 154.",
    },
    {
      name: "User 155",
      imageUrl: "https://picsum.photos/200/300?random=155",
      comment: "This is a comment from User 155.",
    },
    {
      name: "User 156",
      imageUrl: "https://picsum.photos/200/300?random=156",
      comment: "This is a comment from User 156.",
    },
    {
      name: "User 157",
      imageUrl: "https://picsum.photos/200/300?random=157",
      comment: "This is a comment from User 157.",
    },
    {
      name: "User 158",
      imageUrl: "https://picsum.photos/200/300?random=158",
      comment: "This is a comment from User 158.",
    },
    {
      name: "User 159",
      imageUrl: "https://picsum.photos/200/300?random=159",
      comment: "This is a comment from User 159.",
    },
    {
      name: "User 160",
      imageUrl: "https://picsum.photos/200/300?random=160",
      comment: "This is a comment from User 160.",
    },
    {
      name: "User 161",
      imageUrl: "https://picsum.photos/200/300?random=161",
      comment: "This is a comment from User 161.",
    },
    {
      name: "User 162",
      imageUrl: "https://picsum.photos/200/300?random=162",
      comment: "This is a comment from User 162.",
    },
    {
      name: "User 163",
      imageUrl: "https://picsum.photos/200/300?random=163",
      comment: "This is a comment from User 163.",
    },
    {
      name: "User 164",
      imageUrl: "https://picsum.photos/200/300?random=164",
      comment: "This is a comment from User 164.",
    },
    {
      name: "User 165",
      imageUrl: "https://picsum.photos/200/300?random=165",
      comment: "This is a comment from User 165.",
    },
    {
      name: "User 166",
      imageUrl: "https://picsum.photos/200/300?random=166",
      comment: "This is a comment from User 166.",
    },
    {
      name: "User 167",
      imageUrl: "https://picsum.photos/200/300?random=167",
      comment: "This is a comment from User 167.",
    },
    {
      name: "User 168",
      imageUrl: "https://picsum.photos/200/300?random=168",
      comment: "This is a comment from User 168.",
    },
    {
      name: "User 169",
      imageUrl: "https://picsum.photos/200/300?random=169",
      comment: "This is a comment from User 169.",
    },
    {
      name: "User 170",
      imageUrl: "https://picsum.photos/200/300?random=170",
      comment: "This is a comment from User 170.",
    },
    {
      name: "User 171",
      imageUrl: "https://picsum.photos/200/300?random=171",
      comment: "This is a comment from User 171.",
    },
    {
      name: "User 172",
      imageUrl: "https://picsum.photos/200/300?random=172",
      comment: "This is a comment from User 172.",
    },
    {
      name: "User 173",
      imageUrl: "https://picsum.photos/200/300?random=173",
      comment: "This is a comment from User 173.",
    },
    {
      name: "User 174",
      imageUrl: "https://picsum.photos/200/300?random=174",
      comment: "This is a comment from User 174.",
    },
    {
      name: "User 175",
      imageUrl: "https://picsum.photos/200/300?random=175",
      comment: "This is a comment from User 175.",
    },
    {
      name: "User 176",
      imageUrl: "https://picsum.photos/200/300?random=176",
      comment: "This is a comment from User 176.",
    },
    {
      name: "User 177",
      imageUrl: "https://picsum.photos/200/300?random=177",
      comment: "This is a comment from User 177.",
    },
    {
      name: "User 178",
      imageUrl: "https://picsum.photos/200/300?random=178",
      comment: "This is a comment from User 178.",
    },
    {
      name: "User 179",
      imageUrl: "https://picsum.photos/200/300?random=179",
      comment: "This is a comment from User 179.",
    },
    {
      name: "User 180",
      imageUrl: "https://picsum.photos/200/300?random=180",
      comment: "This is a comment from User 180.",
    },
    {
      name: "User 181",
      imageUrl: "https://picsum.photos/200/300?random=181",
      comment: "This is a comment from User 181.",
    },
    {
      name: "User 182",
      imageUrl: "https://picsum.photos/200/300?random=182",
      comment: "This is a comment from User 182.",
    },
    {
      name: "User 183",
      imageUrl: "https://picsum.photos/200/300?random=183",
      comment: "This is a comment from User 183.",
    },
    {
      name: "User 184",
      imageUrl: "https://picsum.photos/200/300?random=184",
      comment: "This is a comment from User 184.",
    },
    {
      name: "User 185",
      imageUrl: "https://picsum.photos/200/300?random=185",
      comment: "This is a comment from User 185.",
    },
    {
      name: "User 186",
      imageUrl: "https://picsum.photos/200/300?random=186",
      comment: "This is a comment from User 186.",
    },
    {
      name: "User 187",
      imageUrl: "https://picsum.photos/200/300?random=187",
      comment: "This is a comment from User 187.",
    },
    {
      name: "User 188",
      imageUrl: "https://picsum.photos/200/300?random=188",
      comment: "This is a comment from User 188.",
    },
    {
      name: "User 189",
      imageUrl: "https://picsum.photos/200/300?random=189",
      comment: "This is a comment from User 189.",
    },
    {
      name: "User 190",
      imageUrl: "https://picsum.photos/200/300?random=190",
      comment: "This is a comment from User 190.",
    },
    {
      name: "User 191",
      imageUrl: "https://picsum.photos/200/300?random=191",
      comment: "This is a comment from User 191.",
    },
    {
      name: "User 192",
      imageUrl: "https://picsum.photos/200/300?random=192",
      comment: "This is a comment from User 192.",
    },
    {
      name: "User 193",
      imageUrl: "https://picsum.photos/200/300?random=193",
      comment: "This is a comment from User 193.",
    },
    {
      name: "User 194",
      imageUrl: "https://picsum.photos/200/300?random=194",
      comment: "This is a comment from User 194.",
    },
    {
      name: "User 195",
      imageUrl: "https://picsum.photos/200/300?random=195",
      comment: "This is a comment from User 195.",
    },
    {
      name: "User 196",
      imageUrl: "https://picsum.photos/200/300?random=196",
      comment: "This is a comment from User 196.",
    },
    {
      name: "User 197",
      imageUrl: "https://picsum.photos/200/300?random=197",
      comment: "This is a comment from User 197.",
    },
    {
      name: "User 198",
      imageUrl: "https://picsum.photos/200/300?random=198",
      comment: "This is a comment from User 198.",
    },
    {
      name: "User 199",
      imageUrl: "https://picsum.photos/200/300?random=199",
      comment: "This is a comment from User 199.",
    },
    {
      name: "User 200",
      imageUrl: "https://picsum.photos/200/300?random=200",
      comment: "This is a comment from User 200.",
    },
  ];

  const [messages, setMessages] = useState([]);
  const [yourComment, setYourComment] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setMessages((messages) => {
      if (currIndex >= 200) currIndex = 0;

      let newMessages = [...data.slice(currIndex, currIndex + 1), ...messages];
      newMessages = newMessages.splice(0, limit);
      currIndex += 1;
      return newMessages;
    });
  };

  const addMessage = () => {
    const newMessage = {
      name: "Raveen",
      imageUrl: "https://picsum.photos/200/300?random=4",
      comment: yourComment,
    };
    setMessages((messages) => [newMessage, ...messages]);
    setYourComment("");
  };

  return (
    <div className="relative border-2 h-3/4 w-1/4 m-4 p-2 overflow-hidden rounded-xl flex flex-col-reverse ">
      <p className="absolute top-2 bg-white w-full border-b-2 p-2 pt-0 font-semibold text-lg">
        Live Chat
      </p>
      <div className="overflow-y-auto p-2 mb-6 flex flex-col-reverse overflow-x-hidden">
        {messages.map((user, index) => (
          <ChatMessage key={index} {...user} />
        ))}
      </div>
      <div className="flex justify-between absolute bottom-0 w-full border-t-2 bg-white">
        <input
          type="text"
          placeholder="Enter your message..."
          className=" p-2 outline-none w-full"
          value={yourComment}
          onChange={(e) => setYourComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addMessage();
              e.target.value = "";
            }
          }}
        ></input>
        <button className="mr-6 cursor-pointer" onClick={addMessage}>
          <GoPaperAirplane />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
