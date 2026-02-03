import * as anchor from "@coral-xyz/anchor";

export const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

export const programId = new anchor.web3.PublicKey(
  "FrogVaUlt11111111111111111111111111111"
);
