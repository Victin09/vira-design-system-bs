export function wrapContent(code: string): string {
    return `<link href="https://raw.githack.com/Victin09/vira-design-system/master/dist/vds-all.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
<body>${code}</body>`;
}