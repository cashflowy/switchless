'use client';
import React from "react";
import { Typography, Stack, Sheet } from "@mui/joy";
import Link from "next/link";
import Image from "next/image";

export default function Logo2({ offering = 'Cashflowy', href = '/', sx = {} }) {
  const sxDefault = { display: 'inline-block', borderRadius: 8 }

  return (
    <Sheet sx={{ ...sx, ...sxDefault }}>
      <Link href={href} style={{ textDecoration: 'none', border: 'none' }}>
        <Stack direction='row'>
          {/* <Typography level="h3" sx={{color:'white', backgroundColor:'black', borderRadius:7, px:1}}>CF</Typography> */}
          <Image
            src="/logo.svg"
            alt="Cashflowy"
            style={{
              alignSelf: 'center',
              border: '2px solid black',
              padding: 4, borderRadius: 8, alignItems: 'center'
            }}
            width={16}
            height={16}
          />
          {offering !== '' && <Typography level="h3" sx={{ px: 1, alignSelf: 'center' }} >{offering}</Typography>}
        </Stack>
      </Link>
    </Sheet>
  )
}