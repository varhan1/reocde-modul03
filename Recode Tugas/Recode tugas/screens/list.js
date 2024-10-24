import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Modal, Button, Image, Text, Center, Box } from "native-base";

// Dummy Data (Array of Objects)
const datas = [
  {
    id: 1,
    title:
      "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 2,
    title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 3,
    title:
      "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 4,
    title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 5,
    title:
      "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 6,
    title:
      "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 7,
    title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
  },
  {
    id: 8,
    title:
      "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 9,
    title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 10,
    title:
      "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
];

// Functional Component
const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState({});

  // Render function for each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { setModalVisible(true); setItemSelect(item); }}>
      <Box
        borderBottomWidth={1}
        borderColor="coolGray.200"
        padding={5}
      >
        <Image
          source={{ uri: item.image }}
          alt="list image"
          width="100%"
          height={200}
          borderRadius={10}
          resizeMode="cover"
        />
        <Text fontSize="md" paddingTop={3}>{item.title}</Text>
      </Box>
    </TouchableOpacity>
  );

  return (
    <Center flex={1} bg="white">
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size="lg"
      >
        <Modal.Content maxWidth="400px">
          <Modal.Body alignItems="center">
            {itemSelect.image ? (
              <Image
                source={{ uri: itemSelect.image }}
                alt="modal image"
                width="100%"
                height={250}
                borderRadius={15}
                resizeMode="cover"
              />
            ) : (
              <Text>No image available</Text>
            )}
            <Text fontSize="lg" paddingTop={3} >{itemSelect.title || 'No title'}</Text>
          </Modal.Body>
          <Modal.Footer justifyContent="center">
            <Button onPress={() => setModalVisible(false)} colorScheme="gray">CLOSE</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default List;
