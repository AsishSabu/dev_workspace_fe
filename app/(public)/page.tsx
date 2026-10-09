"use client";
import {
  ArrowRightOutlined,
  CheckOutlined,
  CheckSquareOutlined,
  FolderOutlined,
  LockOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Space, Typography } from "antd";

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#fff" }}>
      {/* Navbar */}
      <Header
        style={{
          height: 72,
          padding: "0 48px",
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Space size={10}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 9,
              background: "#1677ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckOutlined
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: 700,
              }}
            />
          </div>

          <Text
            strong
            style={{
              fontSize: 24,
              color: "#111827",
            }}
          >
            DevTask
          </Text>
        </Space>

        {/* Navigation */}
        <Space size={32}>
          <a href="#features" style={{ color: "#374151" }}>
            Features
          </a>

          <a href="#how-it-works" style={{ color: "#374151" }}>
            How It Works
          </a>

          <a href="#pricing" style={{ color: "#374151" }}>
            Pricing
          </a>

          <Button href="/sign-in">Sign In</Button>

          <Button type="primary" href="/sign-up">
            Get Started
          </Button>
        </Space>
      </Header>

      <Content>
        {/* Hero Section */}
        <section
          style={{
            padding: "90px 48px 80px",
            background:
              "linear-gradient(135deg, #f8fbff 0%, #ffffff 55%, #f5f9ff 100%)",
          }}
        >
          <Row
            gutter={[64, 64]}
            align="middle"
            style={{
              maxWidth: 1400,
              margin: "0 auto",
            }}
          >
            {/* Hero Content */}
            <Col xs={24} lg={11}>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "#eaf3ff",
                  color: "#1677ff",
                  marginBottom: 24,
                  fontWeight: 500,
                }}
              >
                A modern task management platform
              </div>

              <Title
                style={{
                  fontSize: "clamp(42px, 5vw, 68px)",
                  lineHeight: 1.08,
                  marginBottom: 24,
                  color: "#111827",
                }}
              >
                Organize Your Work,
                <br />
                <span style={{ color: "#1677ff" }}>Build What Matters.</span>
              </Title>

              <Paragraph
                style={{
                  fontSize: 19,
                  lineHeight: 1.7,
                  color: "#64748b",
                  maxWidth: 600,
                  marginBottom: 32,
                }}
              >
                DevTask helps you manage projects, track tasks, and stay
                productive. Simple, powerful, and built for developers and
                teams.
              </Paragraph>

              <Space size={16} wrap>
                <Button
                  type="primary"
                  size="large"
                  href="/sign-up"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  style={{
                    height: 52,
                    padding: "0 28px",
                    fontSize: 16,
                  }}
                >
                  Get Started Free
                </Button>

                <Button
                  size="large"
                  href="/sign-in"
                  style={{
                    height: 52,
                    padding: "0 28px",
                    fontSize: 16,
                  }}
                >
                  Sign In
                </Button>
              </Space>

              {/* Trust points */}
              <Space
                size={24}
                wrap
                style={{
                  marginTop: 28,
                }}
              >
                <Space size={7}>
                  <CheckOutlined style={{ color: "#1677ff" }} />
                  <Text type="secondary">Secure with Clerk</Text>
                </Space>

                <Space size={7}>
                  <CheckOutlined style={{ color: "#1677ff" }} />
                  <Text type="secondary">Your data, your control</Text>
                </Space>

                <Space size={7}>
                  <CheckOutlined style={{ color: "#1677ff" }} />
                  <Text type="secondary">For individuals and teams</Text>
                </Space>
              </Space>
            </Col>

            {/* Dashboard Preview */}
            <Col xs={24} lg={13}>
              <Card
                styles={{
                  body: {
                    padding: 0,
                  },
                }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
                  border: "1px solid #e5e7eb",
                }}
              >
                {/* Fake App Header */}
                <div
                  style={{
                    height: 58,
                    padding: "0 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <Space>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 7,
                        background: "#1677ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckOutlined style={{ color: "#fff" }} />
                    </div>

                    <Text strong>DevTask</Text>
                  </Space>

                  <Text type="secondary">John Doe</Text>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 1fr",
                    minHeight: 380,
                  }}
                >
                  {/* Fake Sidebar */}
                  <div
                    style={{
                      borderRight: "1px solid #f0f0f0",
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 12px",
                        borderRadius: 7,
                        background: "#eaf3ff",
                        color: "#1677ff",
                        marginBottom: 8,
                      }}
                    >
                      Dashboard
                    </div>

                    <div style={{ padding: "10px 12px", color: "#64748b" }}>
                      Projects
                    </div>

                    <div style={{ padding: "10px 12px", color: "#64748b" }}>
                      Tasks
                    </div>
                  </div>

                  {/* Fake Dashboard */}
                  <div
                    style={{
                      padding: 24,
                      background: "#fafafa",
                    }}
                  >
                    <Title level={4} style={{ marginTop: 0 }}>
                      Good morning, John! 👋
                    </Title>

                    <Text type="secondary">
                      Here&apos;s what&apos;s happening with your projects
                      today.
                    </Text>

                    {/* Stats */}
                    <Row gutter={[10, 10]} style={{ marginTop: 20 }}>
                      <Col span={6}>
                        <Card size="small">
                          <Text type="secondary">Projects</Text>
                          <Title level={3} style={{ margin: "5px 0 0" }}>
                            4
                          </Title>
                        </Card>
                      </Col>

                      <Col span={6}>
                        <Card size="small">
                          <Text type="secondary">Tasks</Text>
                          <Title level={3} style={{ margin: "5px 0 0" }}>
                            18
                          </Title>
                        </Card>
                      </Col>

                      <Col span={6}>
                        <Card size="small">
                          <Text type="secondary">Progress</Text>
                          <Title level={3} style={{ margin: "5px 0 0" }}>
                            5
                          </Title>
                        </Card>
                      </Col>

                      <Col span={6}>
                        <Card size="small">
                          <Text type="secondary">Completed</Text>
                          <Title level={3} style={{ margin: "5px 0 0" }}>
                            9
                          </Title>
                        </Card>
                      </Col>
                    </Row>

                    {/* Preview Cards */}
                    <Row gutter={12} style={{ marginTop: 12 }}>
                      <Col span={12}>
                        <Card size="small" title="Recent Projects">
                          <Space
                            orientation="vertical"
                            style={{ width: "100%" }}
                          >
                            <Text strong>DevTask Platform</Text>
                            <Text type="secondary">12 tasks · 67%</Text>

                            <Text strong>Mobile App</Text>
                            <Text type="secondary">5 tasks · 40%</Text>

                            <Text strong>Marketing Website</Text>
                            <Text type="secondary">8 tasks · 50%</Text>
                          </Space>
                        </Card>
                      </Col>

                      <Col span={12}>
                        <Card size="small" title="Recent Tasks">
                          <Space orientation="vertical">
                            <Text>Implement authentication</Text>
                            <Text>Design mobile app UI</Text>
                            <Text>Setup database schema</Text>
                            <Text>Create landing page</Text>
                          </Space>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Quick Features */}
        <section
          style={{
            padding: "40px 48px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Row
            gutter={[32, 32]}
            style={{
              maxWidth: 1400,
              margin: "0 auto",
            }}
          >
            <Feature
              icon={<FolderOutlined />}
              title="Project Management"
              description="Organize your work with projects and keep track of progress."
            />

            <Feature
              icon={<CheckSquareOutlined />}
              title="Task Tracking"
              description="Create, manage, and track tasks effortlessly."
            />

            <Feature
              icon={<TeamOutlined />}
              title="Built for Developers"
              description="A clean and simple interface focused on what matters."
            />

            <Feature
              icon={<LockOutlined />}
              title="Secure & Private"
              description="Powered by Clerk for secure authentication."
            />
          </Row>
        </section>

        {/* Features Section */}
        <section
          id="features"
          style={{
            padding: "90px 48px",
            background: "#f8fafc",
          }}
        >
          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
            }}
          >
            <Text
              strong
              style={{
                color: "#1677ff",
                letterSpacing: 1,
              }}
            >
              FEATURES
            </Text>

            <Title
              style={{
                fontSize: 42,
                maxWidth: 600,
                marginTop: 12,
              }}
            >
              Everything you need to{" "}
              <span style={{ color: "#1677ff" }}>stay productive</span>
            </Title>

            <Paragraph
              style={{
                fontSize: 18,
                color: "#64748b",
                maxWidth: 650,
              }}
            >
              DevTask provides the essential tools to manage your development
              projects and tasks efficiently.
            </Paragraph>

            <Row gutter={[24, 24]} style={{ marginTop: 40 }}>
              <FeatureCard
                icon={<FolderOutlined />}
                title="Projects"
                description="Create and organize projects with clear goals and tracking."
              />

              <FeatureCard
                icon={<CheckSquareOutlined />}
                title="Tasks"
                description="Manage tasks with status, priority, and progress tracking."
              />

              <FeatureCard
                icon={<CheckOutlined />}
                title="Progress"
                description="Keep track of productivity and project completion."
              />

              <FeatureCard
                icon={<TeamOutlined />}
                title="Designed for You"
                description="Built for developers, freelancers, and small teams."
              />
            </Row>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          style={{
            padding: "90px 48px",
            background: "#fff",
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Title>How DevTask Works</Title>

            <Paragraph
              type="secondary"
              style={{
                fontSize: 18,
              }}
            >
              Start managing your work in just a few simple steps.
            </Paragraph>

            <Row gutter={[32, 32]} style={{ marginTop: 50 }}>
              <Step
                number="01"
                title="Create an account"
                description="Sign up securely using Clerk."
              />

              <Step
                number="02"
                title="Create a project"
                description="Organize your work into projects."
              />

              <Step
                number="03"
                title="Add your tasks"
                description="Create tasks and track their progress."
              />
            </Row>
          </div>
        </section>

        {/* CTA */}
        <section
          id="pricing"
          style={{
            padding: "80px 48px",
            background: "#1677ff",
            textAlign: "center",
          }}
        >
          <Title
            style={{
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Ready to organize your work?
          </Title>

          <Paragraph
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 18,
            }}
          >
            Start managing your projects and tasks with DevTask.
          </Paragraph>

          <Button
            size="large"
            href="/sign-up"
            style={{
              marginTop: 16,
              height: 50,
              padding: "0 32px",
            }}
          >
            Get Started Free
          </Button>
        </section>
      </Content>

      {/* Footer */}
      <footer
        style={{
          padding: "30px 48px",
          textAlign: "center",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Text type="secondary">
          © {new Date().getFullYear()} DevTask. All rights reserved.
        </Text>
      </footer>
    </Layout>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Col xs={24} sm={12} lg={6}>
      <Space align="start" size={14}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "#eaf3ff",
            color: "#1677ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 21,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        <div>
          <Text strong style={{ fontSize: 16 }}>
            {title}
          </Text>

          <Paragraph
            type="secondary"
            style={{
              marginTop: 5,
              marginBottom: 0,
            }}
          >
            {description}
          </Paragraph>
        </div>
      </Space>
    </Col>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Col xs={24} sm={12} lg={6}>
      <Card
        style={{
          height: "100%",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 10,
            background: "#eaf3ff",
            color: "#1677ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            marginBottom: 20,
          }}
        >
          {icon}
        </div>

        <Title level={4}>{title}</Title>

        <Paragraph type="secondary">{description}</Paragraph>
      </Card>
    </Col>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Col xs={24} md={8}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#eaf3ff",
          color: "#1677ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          fontWeight: 700,
        }}
      >
        {number}
      </div>

      <Title level={4}>{title}</Title>

      <Paragraph type="secondary">{description}</Paragraph>
    </Col>
  );
}
