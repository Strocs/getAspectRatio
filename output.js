const data = [
	{
		name: 'Astro Glitter',
		images: [
			{ url: 'a1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'a2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'a3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'a4.png', size: { width: 764, height: 1080, aspectRatio: '191 / 270' } },
		],
	},
	{
		name: 'Blue Straycatt',
		images: [
			{ url: 'b1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'b2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'b3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'b4.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Camellia Liz',
		images: [
			{ url: 'c1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'c2.png', size: { width: 786, height: 1080, aspectRatio: '131 / 180' } },
			{ url: 'c3.png', size: { width: 743, height: 1080, aspectRatio: '743 / 1080' } },
			{ url: 'c4.png', size: { width: 985, height: 1080, aspectRatio: '197 / 216' } },
		],
	},
	{
		name: 'Camipepe',
		images: [
			{ url: 'd1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'd2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'd3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'CatAna',
		images: [
			{ url: 'e1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'e2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'e3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Collarcitos',
		images: [
			{ url: 'f1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'f2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'f3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'f4.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Cris Crowfin',
		images: [
			{ url: 'g1.png', size: { width: 755, height: 1080, aspectRatio: '151 / 216' } },
			{ url: 'g2.png', size: { width: 784, height: 1080, aspectRatio: '98 / 135' } },
			{ url: 'g3.png', size: { width: 784, height: 1080, aspectRatio: '98 / 135' } },
		],
	},
	{
		name: 'Drömmer',
		images: [
			{ url: 'h1.png', size: { width: 1528, height: 1080, aspectRatio: '191 / 135' } },
			{ url: 'h2.png', size: { width: 895, height: 1080, aspectRatio: '179 / 216' } },
			{ url: 'h3.png', size: { width: 997, height: 1080, aspectRatio: '997 / 1080' } },
			{ url: 'h4.png', size: { width: 1553, height: 1080, aspectRatio: '1553 / 1080' } },
		],
	},
	{
		name: 'E.vincent.V',
		images: [
			{ url: 'i1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'i2.png', size: { width: 1020, height: 1080, aspectRatio: '17 / 18' } },
			{ url: 'i3.png', size: { width: 759, height: 1080, aspectRatio: '253 / 360' } },
			{ url: 'i4.png', size: { width: 764, height: 1080, aspectRatio: '191 / 270' } },
		],
	},
	{
		name: 'Eline1three',
		images: [
			{ url: 'j1.png', size: { width: 1174, height: 1080, aspectRatio: '587 / 540' } },
			{ url: 'j2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'j3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'elMeNeSe',
		images: [
			{ url: 'k1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'k2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'k3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Neehre',
		images: [
			{ url: 'l1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'l2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'l3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'l4.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Niño Pan',
		images: [
			{ url: 'm1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'm2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'm3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Ojus Pocus',
		images: [
			{ url: 'n1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'n2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'n3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Prrr Miaow',
		images: [
			{ url: 'o1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'o2.png', size: { width: 966, height: 1080, aspectRatio: '161 / 180' } },
			{ url: 'o3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Sofiniscus',
		images: [
			{ url: 'p1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'p2.png', size: { width: 1311, height: 1080, aspectRatio: '437 / 360' } },
			{ url: 'p3.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
		],
	},
	{
		name: 'Sunmorales',
		images: [
			{ url: 'q1.png', size: { width: 1487, height: 1080, aspectRatio: '1487 / 1080' } },
			{ url: 'q2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'q3.png', size: { width: 1528, height: 1080, aspectRatio: '191 / 135' } },
		],
	},
	{
		name: 'Tigre Maltés',
		images: [
			{ url: 'r1.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'r2.png', size: { width: 1080, height: 1080, aspectRatio: '1 / 1' } },
			{ url: 'r3.png', size: { width: 864, height: 1080, aspectRatio: '4 / 5' } },
		],
	},
]
