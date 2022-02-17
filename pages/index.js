import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/abi";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  return ();
}