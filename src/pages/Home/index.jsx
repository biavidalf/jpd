import Logo from "/logo.png";
import ImagemBanner from "./../../assets/imagem2.png";
import ImagemQuemSomos from "./../../assets/imagem3.png";
import BL from "./../../assets/brincadeiras.png";
import BQ from "./../../assets/brinquedoteca.png";
import SB from "./../../assets/salao.png";
import PR from "./../../assets/pintura.png";
import ImagemEster from "./../../assets/ester.jpg";
import ImagemIsabele from "./../../assets/Isabele.jpg";
import ImagemVirginia from "./../../assets/virginia.jpg";
import Contact from "./../../assets/contact-us-concept-illustration_278696-3-removebg-preview.png";
import { useState } from "react";

function Home() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <div className="min-h-screenbg-gray-100 text-gray-800">
      <header className="p-4 ">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={Logo} alt="Logo JPD" className="w-16 h-16" />
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 text-blue-600 border-blue-600"
              >
                Início
              </a>
            </li>
            <li className="flex">
              <a
                href="#parceiroJPD"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600"
              >
                Parceiro JPD
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#sobre"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600"
              >
                Sobre
              </a>
            </li>
            <li className="flex">
              <a
                href="#contato"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600"
              >
                Contatar
              </a>
            </li>
          </ul>
          <button onClick={() => {setIsDropdownActive(!isDropdownActive)}} className="relative flex items-center justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-8 h-8 ${isDropdownActive && 'bg-gray-100'} rounded p-1`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            {isDropdownActive && <ul className="w-40 text-sm top-14 absolute flex flex-col gap-2 bg-gray-50 rounded py-2 shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
              <li className="flex py-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1"
                >
                  Início
                </a>
              </li>
              <li className="flex py-2">
                <a
                  href="#parceiroJPD"
                  className="flex items-center px-4 -mb-1"
                >
                  Parceiro JPD
                </a>
              </li>
              <li className="flex py-2">
                <a
                  rel="noopener noreferrer"
                  href="#sobre"
                  className="flex items-center px-4 -mb-1 hover:text-blue-600 hover:border-blue-600"
                >
                  Sobre
                </a>
              </li>
              <li className="flex py-2">
                <a
                  href="#contato"
                  className="flex items-center px-4 -mb-1 hover:text-blue-600 hover:border-blue-600"
                >
                  Contatar
                </a>
              </li>
            </ul>}
          </button>
        </div>
      </header>

      <section id="banner" className="w-11/12 mx-auto lg:mb-16">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
            <div className="text-4xl font-bold sm:text-6xl">
              <p>ASSOCIAÇÃO</p>
              <p>
                CIVIL <span className="text-blue-500">JOVENS</span>
              </p>
              <p>
                <span className="text-blue-500">PELA DIFERENÇA</span>
              </p>
            </div>
            <p className="mt-6 mb-8 sm:text-lg sm:mb-12">
              ONG com mais de 300 voluntários ativos
              <br className="hidden md:inline lg:hidden" /> que vem há 8 anos
              fazendo a diferença em Fortaleza - CE
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScJyWtGsco3Ug3ryhb86lCuEGxk4lSHdm_d4pU7CF7EWaWc_w/viewform"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-500 text-gray-100"
              >
                Iniciar o voluntariado
              </a>
              <a
                href="#sobre"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-400 hover:bg-gray-300 hover:bg-opacity-20"
              >
                Saber mais
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={ImagemBanner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg"
            />
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto py-10 bg-gray-800 text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-10 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-50">
              QUEM SOMOS NÓS?
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400">
              Associação Civil Jovens Pela Diferença
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-50">
                Projeto social
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Apaixonados por fazer a diferença na vida das pessoas realizando
                ações de recreação em Fortaleza e região metropolitana do
                Ceará..
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-50">
                      Fundado em abril de 2015
                    </h4>
                    <p className="mt-2 text-gray-400">
                      A ONG Jovens Pela Diferença cresceu ao longo de seus 8
                      anos de atuação e atualmente possui mais de 300
                      voluntários ativos.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-50">
                      Ações
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Além da atuação com crianças, atuamos com idosos, pessoas
                      em situação de rua, animais e com o meio ambiente.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-50">
                      Nossa Missão
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Contribuir com o desenvolvimento holístico da criança e do
                      adolescente em extrema vulnerabilidade social, o
                      reconhecimento da sua centralidade e a importância no
                      desenvolvimento e empoderamento da comunidade.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-50">
                      Visão
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Promover um mundo mais justo, inclusivo e repleto de
                      oportunidades para todas as crianças.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-50">
                      Valores
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Justiça, responsabilidade, inclusão, relevância e
                      inovação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={ImagemQuemSomos}
                alt=""
                className="mx-auto lg:w-4/6 rounded-lg shadow-lg bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="dados" className="w-11/12 mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              8 anos de funcionamento
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Desde 2015 crescendo e fazendo a diferença
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Voluntários ativos
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  +300
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Ex-voluntários
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  +1.500
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Em lista de espera
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  +300
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="atuacao" className="w-11/12 mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Como atuamos?</h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Para melhor organização de nossas atividades durantes as ações,
              nossa ONG se divide em equipes. As equipes atuam nas ações,
              levando atividades específicas para entretenimento das crianças
              dos locais que visitamos.
            </p>
          </div>

          <div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt="Brincadeiras Livres"
                    src={BL}
                    className="absolute inset-0 h-full mx-auto"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl text-emerald-600">
                    Brincadeiras Livres
                  </h2>

                  <p className="mt-4 text-gray-600 text-lg">
                    O BL realiza{" "}
                    <span className="font-semibold">
                      {" "}
                      atividades esportivas com crianças de 7 a 12 anos,{" "}
                    </span>{" "}
                    promovendo transformação social para crianças e adolescentes
                    em situação de vulnerabilidade, oferecendo a prática
                    esportiva e atividades culturais, pedagógicas e teatrais.
                    Com bolas, cones, bambolês, circuitos e esportes, a equipe
                    proporciona às crianças a alegria de correr, brincar e
                    gastar energia com alegria e disposição.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                  <img
                    alt="Brinquedoteca"
                    src={BQ}
                    className="absolute inset-0 h-full mx-auto"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl text-yellow-600">
                    Brinquedoteca
                  </h2>

                  <p className="mt-4 text-gray-600 text-lg">
                    A BQ realiza{" "}
                    <span className="font-semibold">
                      atividades lúdicas com crianças de 0 a 6 anos{" "}
                    </span>
                    , proporcionando experiências de imersão no mundo criativo
                    das crianças, mesmo diante dos jogos mais simples. Com
                    pintura em papel e em gesso, jogos, brinquedos e desenhos
                    animados, a Brinquedoteca é onde a imaginação dos pequenos
                    pode aflorar.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt="Salao"
                    src={SB}
                    className="absolute inset-0 h-full mx-auto"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl text-violet-600">
                    Salão de Beleza
                  </h2>

                  <p className="mt-4 text-gray-600 text-lg">
                    O SB leva beleza, autoestima e magia para o dia de mulheres
                    de todas as idades. A equipe{" "}
                    <span className="font-semibold">
                      embeleza crianças, adolescentes, mulheres adultas em
                      situação de rua e idosas em abrigos,
                    </span>{" "}
                    distribuindo sorrisos. Com o lema Beleza com propósito, a
                    equipe visa trabalhar e aumentar a autoestima de suas
                    pequenas clientes por meio de serviços de maquiagem, cabelo
                    e unhas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                  <img
                    alt="Pintura"
                    src={PR}
                    className="absolute inset-0 h-full mx-auto"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl text-red-600">
                    Pintura de Rosto
                  </h2>

                  <p className="mt-4 text-gray-600 text-lg">
                    A PR traz cor aos nossos dias por meio de{" "}
                    <span className="font-semibold">
                      {" "}
                      pinturas faciais e corporais nas crianças.{" "}
                    </span>{" "}
                    Seja um animal favorito, um super-herói ou o brasão do time
                    do coração, nada paga o sorriso dos pequenos ao ver arte com
                    significado registrada neles. A alegria de escolher sua arte
                    favorita e ver o resultado final no espelho é o que faz
                    valer a pena todo o esforço dos nossos artistas em levar cor
                    para o dia dos nossos pequenos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parceiroJPD" className="bg-gray-900 text-white">
        <div className="w-11/12 mx-auto">
          <div className="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Parceiro JPD</h2>
              <p className="mt-4 text-gray-300">
                O Parceiro JPD é muito mais do que uma simples arrecadação de
                fundos. É uma oportunidade para indivíduos, empresas e
                comunidades se tornarem parte fundamental de nossa missão. Ao se
                tornar um Parceiro JPD, você se junta a nós na construção de um
                futuro mais brilhante e compassivo para aqueles que atendemos.
              </p>
            </div>
            <div className="max-w-xl mt-4 md:mt-10 mb-2 md:my-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Benefícios de ser um Parceiro JPD:
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8  md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart-handshake"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Impacto Duradouro</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Sua doação mensal nos permite planejar projetos de longo
                    prazo e atingir mais pessoas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-speech"
                  >
                    <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
                    <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
                    <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Atualizações Regulares</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Mantenha-se informado sobre o impacto de sua contribuição e
                    o progresso de nossos projetos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-helping-hand"
                  >
                    <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" />
                    <path d="m2 14 6 6" />
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Envolvimento Ativo</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Sua doação mensal nos permite planejar projetos de longo
                    prazo e atingir mais pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="py-20 bg-gray-800 text-gray-100">
            <div className="container px-4 mx-auto">
              <div className="max-w-2xl mx-auto mb-16 text-center">
                <span className="font-bold tracki uppercase text-cyan-400">
                  PLANOS
                </span>
                <h2 className="text-4xl font-bold lg:text-5xl">
                  Como funciona?
                </h2>
                <p>ao se tornar</p>
              </div>
              <div className="flex flex-wrap items-stretch mx-4 gap-y-6">
                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Azul</h4>
                      <span className="text-6xl font-bold">
                        R$5
                        <span className="text-sm tracki">/mês</span>
                      </span>
                    </div>
                    <p className="mt-3 leadi text-gray-400 flex-1">
                      Um pequeno gesto que faz uma grande diferença.
                    </p>
                    <a
                      href="https://www.parceirojpd.com.br/"
                      className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-transparent border border-cyan-400 text-gray-300"
                    >
                      Escolher
                    </a>
                  </div>
                </div>

                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-cyan-400 text-gray-800">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Bronze</h4>
                      <span className="text-6xl font-bold">
                        R$10
                        <span className="text-sm tracki">/mês</span>
                      </span>
                    </div>
                    <p className="leading-3 flex-1 font-semibold">
                      Sua contribuição ajuda a construir pontes para um futuro
                      melhor.
                    </p>
                    <a
                      href="https://www.parceirojpd.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-gray-800 text-gray-300"
                    >
                      Escolher
                    </a>
                  </div>
                </div>

                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Prata</h4>
                      <span className="text-6xl font-bold">
                        R$30
                        <span className="text-sm tracki">/mês</span>
                      </span>
                    </div>
                    <p className="leadi text-gray-400 flex-1">
                      Juntos, podemos criar oportunidades para todos.
                    </p>
                    <a
                      href="https://www.parceirojpd.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-transparent border border-cyan-400 text-gray-300"
                    >
                      Escolher
                    </a>
                  </div>
                </div>

                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Ouro</h4>
                      <span className="text-6xl font-bold">
                        R$50
                        <span className="text-sm tracki">/mês</span>
                      </span>
                    </div>
                    <p className="leadi text-gray-400 flex-1">
                      Seu compromisso fortalece nossa luta por um mundo mais
                      inclusivo.
                    </p>
                    <a
                      href="https://www.parceirojpd.com.br/"
                      rel="noreferrer"
                      target="_blank"
                      className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-transparent border border-cyan-400 text-gray-300"
                    >
                      Escolher
                    </a>
                  </div>
                </div>

                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Platina</h4>
                      <span className="text-6xl font-bold">
                        R$70
                        <span className="text-sm tracki">/mês</span>
                      </span>
                    </div>
                    <p className="leadi text-gray-400 flex-1">
                      Seu compromisso fortalece nossa luta por um mundo mais
                      inclusivo.
                    </p>
                    <a
                      href="https://www.parceirojpd.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-transparent border border-cyan-400 text-gray-300"
                    >
                      Escolher
                    </a>
                  </div>
                </div>

                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">Diamante</h4>
                      <span className="text-6xl font-bold">
                        R$100
                        <span className="text-sm tracki">/mês</span>
                      </span>
                    </div>
                    <p className="leadi text-gray-400 flex-1">
                      Sua dedicação é um farol de esperança para aqueles que
                      precisam.
                    </p>
                    <a
                      href="https://www.parceirojpd.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-transparent border border-cyan-400 text-gray-300"
                    >
                      Escolher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="direcao" className="py-6 w-11/12 mx-auto">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Nossa Direção</h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Conheça quem está por frente do projeto
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 ">
              <img
                alt=""
                className="object-cover w-56 h-56 mx-auto mb-4 bg-center rounded-lg bg-gray-500"
                src={ImagemEster}
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Ester Farias</h4>
                <p className="text-sm text-gray-400">Presidente</p>
                <div className="flex mt-2 space-x-2">
                  <a
                    href="https://www.instagram.com/strfrs"
                    title="Instagram"
                    className="text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img
                alt=""
                className="object-cover w-56 h-56 mx-auto mb-4 bg-center rounded-lg bg-gray-500"
                src={ImagemVirginia}
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Virgínia Costa</h4>
                <p className="text-sm text-gray-400">Vice Presidente</p>
                <div className="flex mt-2 space-x-2">
                  <a
                    href="https://www.instagram.com/virginiavasconceloss"
                    title="Instagram"
                    className="text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img
                alt=""
                className="object-cover w-56 h-56 mx-auto mb-4 bg-center rounded-lg bg-gray-500"
                src={ImagemIsabele}
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Isabele Monteiro</h4>
                <p className="text-sm text-gray-400">Secretária Executiva</p>
                <div className="flex mt-2 space-x-2">
                  <a
                    href="https://www.instagram.com/isabelemonteiro"
                    title="Instagram"
                    className="text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="contato"
        className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
      >
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Entre em contato!</h2>
            <div className="text-gray-400">
              Quer nos mandar alguma mensagem? Escreva ao lado!
            </div>
          </div>
          <img src={Contact} alt="" className="w-[400px]" />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label className="text-sm">Seu nome</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border bg-gray-100 border-gray-300 shadow"
            />
          </div>
          <div>
            <label className="text-sm">E-mail</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded border bg-gray-100 border-gray-300 shadow"
            />
          </div>
          <div>
            <label className="text-sm">Mensagem</label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded border bg-gray-100 border-gray-300 shadow"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-blue-500 text-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="border border-t-gray-300">
        <div className="container flex flex-col p-4 mx-auto md:px-8 md:py-3 lg:flex-row divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center items-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li className="">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full">
                  <img src={Logo} alt="" />
                </div>
                <span className="self-center text-2xl font-semibold">
                  Jovens Pela Diferença
                </span>
              </a>
            </li>
          </ul>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center space-x-4 space-y-2 sm:flex-row sm:justify-center sm:items-center">
              <ul className="text-center items-center sm:flex sm:justify-around sm:space-x-4 lg:flex-1">
                <li className="cursor-pointer hover:text-gray-600">
                  <a href="#sobre">Sobre</a>
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  <a href="#contato">Contatar</a>
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  <a href="https://www.parceirojpd.com.br/">
                    Quero ser parceiro
                  </a>
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScJyWtGsco3Ug3ryhb86lCuEGxk4lSHdm_d4pU7CF7EWaWc_w/viewform">
                    Quero me inscrever
                  </a>
                </li>
              </ul>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/jovenspeladiferenca/"
                  title="Instagram"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-600 text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/jovenspeladiferenca/?locale=pt_BR"
                  title="Facebook"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-600 text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:jpdprojetosocial@gmail.com"
                  title="Gmail"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-600 text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
